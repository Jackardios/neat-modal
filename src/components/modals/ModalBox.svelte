<style global lang="postcss">
  .neat-modal-box {
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 1rem;

    &--small {
      max-width: 480px;
    }

    &--medium {
      max-width: 640px;
    }

    &--large {
      max-width: 720px;
    }

    &--fullwidth {
      max-width: 100%;
    }
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { getModalsContainerContext } from '../modals-container/ModalsContainer.svelte'
  import clickAwayListener from '../../utils/clickAwayListener'
  import clsx from 'clsx'

  let className
  export { className as class }
  export let size = 'medium'
  export let closeOnEscape = true
  export let closeOnClickAway = true

  const { classNames } = getModalsContainerContext()
  const sizeClassNamesMapping = {
    small: classNames.modalBoxSmall,
    medium: classNames.modalBoxMedium,
    large: classNames.modalBoxLarge
  }

  const dispatch = createEventDispatcher()
  function close() {
    dispatch('close')
  }

  function handleKeyDown(event) {
    if (closeOnEscape && event.key === 'Escape') {
      close()
    }
  }
</script>

<svelte:window on:keydown={closeOnEscape && handleKeyDown} />
<div
  class={clsx(classNames.modalBox, sizeClassNamesMapping[size], className)}
  use:clickAwayListener
  on:clickAway={closeOnClickAway && close}
  tabindex="-1"
  role="dialog"
  aria-live="assertive"
  aria-modal="true"
>
  <slot />
</div>
