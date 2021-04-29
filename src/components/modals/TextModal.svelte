<style global lang="postcss">
  .neat-text-modal {
  }

  .neat-text-modal__title {
  }

  .neat-text-modal__content {
  }
</style>

<script lang="ts">
  import { rootStore } from '../../stores/rootStore'
  import type { UID, TextModalOptions } from '../types'

  import ModalBase from './ModalBase.svelte'
  import ModalBox from './ModalBox.svelte'
  import { getModalsContainerContext } from '../ModalsContainer.svelte'

  export let id: UID
  export let options: TextModalOptions | undefined

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
