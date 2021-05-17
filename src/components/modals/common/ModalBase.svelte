<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { quadOut } from 'svelte/easing'
  import { focusTrap } from 'svelte-focus-trap'
  import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
  import clsx from 'clsx'

  import { getModalsContainerContext } from '../../modals-container/ModalsContainer.svelte'
  const { classNames } = getModalsContainerContext()

  let modalBaseRoot

  onMount(() => {
    disableBodyScroll(modalBaseRoot)

    return () => {
      enableBodyScroll(modalBaseRoot)
    }
  })

  export let zIndex: number = 10000
  export let disableCloseOnBackdropClick: boolean = false
  export let hideBackdrop: boolean = false

  const dispatch = createEventDispatcher()
  function close(event: Event) {
    dispatch('close')
  }
</script>

<div
  bind:this={modalBaseRoot}
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
