<script lang="ts">
  import { getContext } from 'svelte'
  import { fly } from 'svelte/transition'
  import { quadOut } from 'svelte/easing'
  import clsx from 'clsx'

  import type { ClassNames } from '../../modals-container/types'
  import type { ModalTheme } from '../types'

  let className
  export { className as class }
  export let size = 'medium'
  export let theme: ModalTheme = 'default'

  const classNames: ClassNames = getContext('classNames')
  const sizeClassNamesMapping = {
    small: clsx('neat-modal-box--small', classNames.modalBoxSizeSmall),
    medium: clsx('neat-modal-box--medium', classNames.modalBoxSizeMedium),
    large: clsx('neat-modal-box--large', classNames.modalBoxSizeLarge),
    fullwidth: clsx('neat-modal-box--fullwidth', classNames.modalBoxSizeFullwidth)
  }
  const themeClassNamesMapping = {
    default: clsx('neat-modal-box--default', classNames.modalBoxThemeDefault),
    primary: clsx('neat-modal-box--primary', classNames.modalBoxThemePrimary),
    info: clsx('neat-modal-box--info', classNames.modalBoxThemeInfo),
    success: clsx('neat-modal-box--success', classNames.modalBoxThemeSuccess),
    warning: clsx('neat-modal-box--warning', classNames.modalBoxThemeWarning),
    error: clsx('neat-modal-box--error', classNames.modalBoxThemeError)
  }
</script>

<div
  class={clsx(
    'neat-modal-box',
    sizeClassNamesMapping[size],
    themeClassNamesMapping[theme],
    className,
    classNames.modalBox
  )}
  tabindex="-1"
  role="dialog"
  aria-live="assertive"
  aria-modal="true"
  transition:fly={{ duration: 240, y: 20, easing: quadOut }}
>
  {#if $$slots.header}
    <slot name="header" />
  {/if}
  {#if $$slots.content}
    <div class={clsx('neat-modal-box__content', classNames.modalBoxContent)}>
      <slot name="content" />
    </div>
  {/if}
  <slot />
  {#if $$slots.footer}
    <slot name="footer" />
  {/if}
</div>
