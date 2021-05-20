<script lang="ts">
  import { getContext, onMount as baseOnMount, onDestroy as baseOnDestroy } from 'svelte'
  import clsx from 'clsx'

  import type { ClassNames } from '../../modals-container/types'
  import type {
    ModalButtonType,
    ModalButtonTheme,
    ModalId,
    ModalButtonAttribute
  } from '../types'
  import { rootStore } from '../../../stores/rootStore'

  const id: ModalId = getContext('modalId')
  const classNames: ClassNames = getContext('classNames')
  const themeClassName: {
    [key: ModalButtonTheme]: string
  } = {
    default: clsx('neat-modal-button--default', classNames.modalButtonThemeDefault),
    primary: clsx('neat-modal-button--primary', classNames.modalButtonThemePrimary),
    info: clsx('neat-modal-button--info', classNames.modalButtonThemeInfo),
    success: clsx('neat-modal-button--success', classNames.modalButtonThemeSuccess),
    warning: clsx('neat-modal-button--warning', classNames.modalButtonThemeWarning),
    error: clsx('neat-modal-button--error', classNames.modalButtonThemeError)
  }

  export let text: string = ''
  export let type: ModalButtonType = 'button'
  export let theme: ModalButtonTheme = 'default'
  export let attributes: Array<ModalButtonAttribute> | undefined = undefined
  export let onMount = undefined
  export let onDestroy = undefined

  let modalButtonHTMLElement
  baseOnMount(function () {
    if (onMount) {
      onMount(modalButtonHTMLElement, $$props)
    }
  })

  baseOnDestroy(function () {
    if (onDestroy) {
      onDestroy(modalButtonHTMLElement, $$props)
    }
  })

  const makeClickHandler = function () {
    if (type === 'close') {
      return () => rootStore.close(id)
    }
    return undefined
  }

  const className = clsx(
    'neat-modal-button',
    themeClassName[theme],
    classNames.modalButton
  )
</script>

{#if type === 'link'}
  <a bind:this={modalButtonHTMLElement} class={className} {...attributes} {...$$restProps}
    >{text}</a
  >
{:else}
  <button
    bind:this={modalButtonHTMLElement}
    class={className}
    on:click={makeClickHandler()}
    {type}
    {...attributes}
    {...$$restProps}>{text}</button
  >
{/if}
