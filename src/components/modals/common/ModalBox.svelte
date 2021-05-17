<script lang="ts">
  import { fly } from 'svelte/transition'
  import { quadOut } from 'svelte/easing'

  import { getModalsContainerContext } from '../../modals-container/ModalsContainer.svelte'
  import clsx from 'clsx'

  let className
  export { className as class }
  export let size = 'medium'

  const { classNames } = getModalsContainerContext()
  const sizeClassNamesMapping = {
    small: clsx('neat-modal-box--small', classNames.modalBoxSmall),
    medium: clsx('neat-modal-box--medium', classNames.modalBoxMedium),
    large: clsx('neat-modal-box--large', classNames.modalBoxLarge),
    fullwidth: clsx('neat-modal-box--fullwidth', classNames.modalBoxFullwidth)
  }
</script>

<div
  class={clsx(
    'neat-modal-box',
    sizeClassNamesMapping[size],
    className,
    classNames.modalBox
  )}
  tabindex="-1"
  role="dialog"
  aria-live="assertive"
  aria-modal="true"
  transition:fly={{ duration: 240, y: 20, easing: quadOut }}
>
  <slot />
  {#if $$slots.content}
    <div class={clsx('neat-modal-box__content', classNames.modalBoxContent)}>
      <slot name="content" />
    </div>
  {/if}
</div>
