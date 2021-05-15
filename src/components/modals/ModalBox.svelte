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
    small: clsx('neat-modal-box--small', classNames.modalBoxSmall),
    medium: clsx('neat-modal-box--medium', classNames.modalBoxMedium),
    large: clsx('neat-modal-box--large', classNames.modalBoxLarge)
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
  class={clsx(
    'neat-modal-box',
    sizeClassNamesMapping[size],
    className,
    classNames.modalBox
  )}
  use:clickAwayListener
  on:clickAway={closeOnClickAway && close}
  tabindex="-1"
  role="dialog"
  aria-live="assertive"
  aria-modal="true"
>
  <slot />
</div>
