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

  export let id: ModalId
  export let options: DefaultModalOptions | undefined

  const {
    title = '',
    description = '',
    content = '',
    size,
    disableCloseOnBackdropClick,
    hideBackdrop,
    zIndex
  } = options || {}
  const classNames: ClassNames = getContext('classNames')

  function closeModal() {
    rootStore.close(id)
  }
</script>

<ModalBase
  {zIndex}
  disableCloseOnBackdropClick={options.disableCloseOnBackdropClick}
  hideBackdrop={options.hideBackdrop}
  on:close={closeModal}
>
  <ModalBox {size} class={clsx('neat-default-modal', classNames.defaultModal)}>
    <ModalBoxHeader>
      <svelte:fragment slot="title">{@html title}</svelte:fragment>
      <svelte:fragment slot="description">{@html description}</svelte:fragment>
      <ModalCloseButton slot="button" on:click={closeModal} />
    </ModalBoxHeader>
    <svelte:fragment slot="content">{@html content}</svelte:fragment>
  </ModalBox>
</ModalBase>
