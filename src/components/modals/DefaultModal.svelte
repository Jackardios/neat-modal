<style global lang="postcss">
  .neat-default-modal {
  }

  .neat-default-modal__title {
  }

  .neat-default-modal__content {
  }
</style>

<script lang="ts">
  import { rootStore } from '../../stores/rootStore'
  import type { ModalId, DefaultModalOptions } from './types'

  import ModalBase from './ModalBase.svelte'
  import ModalBox from './ModalBox.svelte'
  import { getModalsContainerContext } from '../modals-container/ModalsContainer.svelte'

  export let id: ModalId
  export let options: DefaultModalOptions | undefined

  const { title = '', text = '', size = 'medium', closeOnClickAway, closeOnEscape } =
    options || {}
  const { classNames } = getModalsContainerContext()

  function closeModal() {
    rootStore.close(id)
  }
</script>

<ModalBase>
  <ModalBox class={classNames.textModal} {...options} on:close={closeModal}>
    <h2>{@html title}</h2>
    <p>{@html text}</p>
    <button type="button" on:click={closeModal}>Закрыть</button>
  </ModalBox>
</ModalBase>
