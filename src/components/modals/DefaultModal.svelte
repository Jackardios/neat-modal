<script lang="ts">
  import { rootStore } from '../../stores/rootStore'
  import type { ModalId, DefaultModalOptions } from './types'

  import ModalBase from './common/ModalBase.svelte'
  import ModalBox from './common/ModalBox.svelte'
  import ModalBoxHeader from './common/ModalBoxHeader.svelte'
  import ModalCloseButton from './common/ModalCloseButton.svelte'
  import { getModalsContainerContext } from '../modals-container/ModalsContainer.svelte'
  import clsx from 'clsx'

  export let id: ModalId
  export let options: DefaultModalOptions | undefined

  const { title, description, content, size, closeOnClickAway, closeOnEscape, zIndex } =
    options || {}
  const { classNames } = getModalsContainerContext()

  function closeModal() {
    rootStore.close(id)
  }
</script>

<ModalBase {...options} on:close={closeModal}>
  <ModalBox class={clsx('neat-default-modal', classNames.defaultModal)} {...options}>
    <ModalBoxHeader>
      <svelte:fragment slot="title">{@html title}</svelte:fragment>
      <svelte:fragment slot="description">{@html description}</svelte:fragment>
      <ModalCloseButton slot="button" on:click={closeModal} />
    </ModalBoxHeader>
    <svelte:fragment slot="content">{@html content}</svelte:fragment>
  </ModalBox>
</ModalBase>
