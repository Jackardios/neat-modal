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

  setContext('classNames', classNames)

  colorPalette = {
    ...defaultColorPalette,
    ...colorPalette
  }
  let cssVariables = colorPaletteToCssVars(colorPalette)

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
