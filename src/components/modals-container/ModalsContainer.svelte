<script context="module" lang="ts">
  import { getContext } from 'svelte'
  import type { ClassNames } from './types'

  export const contextKey = {}

  export type ModalsContainerContext =
    | {
        classNames: ClassNames
      }
    | undefined

  export function getModalsContainerContext(): ModalsContainerContext {
    return getContext(contextKey)
  }
</script>

<script lang="ts">
  import { onMount, setContext } from 'svelte'
  import type { ClassNames, ColorPalette } from './types'
  import { defaultColorPalette } from './defaults'
  import { rootStore } from '../../stores/rootStore'

  import colorPaletteToCssVars from '../../utils/colorPaletteToCssVars'
  import cssVars from '../../utils/cssVars'
  import getScrollbarWidth from '../../utils/getScrollbarWidth'

  import Modal from './../modals/Modal.svelte'

  export let classNames: ClassNames = {}
  export let colorPalette: ColorPalette = defaultColorPalette

  colorPalette = {
    ...defaultColorPalette,
    ...colorPalette
  }

  const context: ModalsContainerContext = {
    classNames
  }
  setContext(contextKey, context)

  let cssVariables = {}

  onMount(() => {
    cssVariables = {
      'neat-modal-scrollbar-width': `${getScrollbarWidth()}px`,
      ...colorPaletteToCssVars(colorPalette)
    }

    return () => {
      document.body.style.removeProperty('padding-right')
    }
  })

  rootStore.subscribe(currentStore => {
    if (currentStore.modals && currentStore.modals.length) {
      const scrollbarWidth = getScrollbarWidth()
      cssVariables = {
        ...cssVariables,
        'neat-modal-scrollbar-width': `${scrollbarWidth}px`
      }
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`
      }
    } else {
      document.body.style.removeProperty('padding-right')
    }
  })

  const handleKeyDown = event => {
    if (event.key !== 'Escape') {
      return
    }

    const topModal = rootStore.getTopModal()
    if (topModal && topModal.options && !topModal.options.disableCloseOnEscape) {
      rootStore.close(topModal.id)
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />
<div use:cssVars={cssVariables} class="neat-modal-modals-container">
  {#each $rootStore.modals as modal (modal.id)}
    <Modal {...modal} />
  {/each}
</div>
