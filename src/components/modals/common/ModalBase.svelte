<script lang="ts">
  import { createEventDispatcher, getContext } from 'svelte'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { quadOut } from 'svelte/easing'
  import { focusTrap } from 'svelte-focus-trap'
  import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
  import clsx from 'clsx'

  import type { ModalRootHTMLElement, SetModalRootHTMLElement } from '../types'
  import type { ClassNames } from '../../modals-container/types'

  const classNames: ClassNames = getContext('classNames')
  const setRootHTMLElement: SetModalRootHTMLElement = getContext('setRootHTMLElement')

  export let zIndex: number = 10000
  export let disableCloseOnBackdropClick: boolean = false
  export let hideBackdrop: boolean = false
  let rootHTMLElement: ModalRootHTMLElement

  onMount(() => {
    setRootHTMLElement(rootHTMLElement)
    disableBodyScroll(rootHTMLElement)

    return () => {
      enableBodyScroll(rootHTMLElement)
    }
  })

  const dispatch = createEventDispatcher()
  function close(event: Event) {
    dispatch('close')
  }
</script>

<div
  bind:this={rootHTMLElement}
  class={clsx('neat-modal-base', classNames.modalBase, [
    ...(!hideBackdrop
      ? ['neat-modal-base--with-backdrop', classNames.modalBaseWithBackdrop]
      : [])
  ])}
  use:focusTrap
  transition:fade={{ duration: 240, easing: quadOut }}
  style="z-index: {zIndex}"
>
  <span class={clsx('neat-modal-base__inner', classNames.modalBaseInner)}>
    {#if !disableCloseOnBackdropClick}
      <div class="neat-modal-base__backdrop" on:click={close} />
    {/if}
    <slot />
  </span>
</div>
