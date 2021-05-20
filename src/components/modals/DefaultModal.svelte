<script lang="ts">
  import { getContext } from 'svelte'
  import { rootStore } from '../../stores/rootStore'
  import type { ModalId, DefaultModalOptions } from './types'

  import ModalBase from './common/ModalBase.svelte'
  import ModalBox from './common/ModalBox.svelte'
  import ModalBoxHeader from './common/ModalBoxHeader.svelte'
  import ModalCloseButton from './common/ModalCloseButton.svelte'
  import type { ClassNames } from '../modals-container/types'
  import clsx from 'clsx'
  import ModalForm from './common/ModalForm.svelte'
  import ModalButtons from './common/ModalButtons.svelte'

  export let id: ModalId
  export let options: DefaultModalOptions | undefined

  const {
    theme = 'default',
    title = '',
    description = '',
    content = '',
    size,
    zIndex,
    disableCloseOnBackdropClick,
    hideBackdrop,
    scrollbarCompensation,
    buttons,
    form
  } = options || {}
  const classNames: ClassNames = getContext('classNames')

  function closeModal() {
    rootStore.close(id)
  }
</script>

<ModalBase
  {zIndex}
  {disableCloseOnBackdropClick}
  {hideBackdrop}
  {scrollbarCompensation}
  on:close={closeModal}
>
  <ModalBox {size} {theme} class={clsx('neat-default-modal', classNames.defaultModal)}>
    <ModalBoxHeader slot="header" {title} {description}>
      <svelte:fragment slot="title">{@html title}</svelte:fragment>
      <svelte:fragment slot="description">{@html description}</svelte:fragment>
      <ModalCloseButton slot="button" on:click={closeModal} />
    </ModalBoxHeader>
    <svelte:fragment slot="content">{@html content}</svelte:fragment>
    <ModalForm slot="footer" {...form}>
      <ModalButtons {buttons} />
    </ModalForm>
  </ModalBox>
</ModalBase>
