<script lang="ts">
  import { getModalsContainerContext } from '../../modals-container/ModalsContainer.svelte'
  import clsx from 'clsx'

  const { classNames } = getModalsContainerContext()
</script>

<div class={clsx('neat-modal-box-header', classNames.modalBoxHeader)}>
  <div
    class={clsx(
      'neat-modal-box-header__text-container',
      classNames.modalBoxHeaderTextContainer
    )}
  >
    {#if $$slots.title}
      <div class={clsx('neat-modal-box-header__title', classNames.modalBoxHeaderTitle)}>
        <slot name="title" />
      </div>
    {/if}
    {#if $$slots.description}
      <div
        class={clsx(
          'neat-modal-box-header__description',
          classNames.modalBoxHeaderDescription
        )}
      >
        <slot name="description" />
      </div>
    {/if}
  </div>
  {#if $$slots.button}
    <div
      class={clsx(
        'neat-modal-box-header__button-container',
        classNames.modalBoxHeaderButtonContainer
      )}
    >
      <slot name="button" />
    </div>
  {/if}
</div>
