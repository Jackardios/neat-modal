<style global lang="postcss">
  .neat-modal-base {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    -webkit-backface-visibility: hidden;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    /* GPU acceleration */
    transform: translate3d(0, 0, 0);
    /* Scrollbar compensation */
    padding-right: var(--neat-modal-scrollbar-width) !important;

    background-color: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;

    -webkit-overflow-scrolling: touch;
    overflow: auto;
    //backdrop-filter: blur(5px);

    &::before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 0px;
      height: 100%;
      font-size: 0px;
      user-select: none;
      pointer-events: none;
    }
  }
  .neat-modal-base__inner {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    max-width: 100%;
    white-space: normal;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    box-sizing: border-box;
  }
</style>

<script lang="ts">
  import { getModalsContainerContext } from '../modals-container/ModalsContainer.svelte'
  import { onMount } from 'svelte'
  import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

  const { classNames } = getModalsContainerContext()

  let modalBaseRoot

  onMount(() => {
    disableBodyScroll(modalBaseRoot)

    return () => {
      enableBodyScroll(modalBaseRoot)
    }
  })
</script>

<div bind:this={modalBaseRoot} class={classNames.modalBase}>
  <span class={classNames.modalBaseInner}><slot /></span>
</div>
