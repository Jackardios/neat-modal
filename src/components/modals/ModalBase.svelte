<script lang="ts">
  import { getModalsContainerContext } from '../modals-container/ModalsContainer.svelte'
  import { onMount } from 'svelte'
  import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
  import clsx from 'clsx'

  const { classNames } = getModalsContainerContext()

  let modalBaseRoot

  onMount(() => {
    disableBodyScroll(modalBaseRoot)

    return () => {
      enableBodyScroll(modalBaseRoot)
    }
  })
</script>

<div bind:this={modalBaseRoot} class={clsx('neat-modal-base', classNames.modalBase)}>
  <span class={clsx('neat-modal-base__inner', classNames.modalBaseInner)}><slot /></span>
</div>
