<script lang="ts">
  import { rootStore } from '../../stores/rootStore'
  import type { ModalId, DefaultModalOptions } from './types'

  import ModalBase from './ModalBase.svelte'
  import ModalBox from './ModalBox.svelte'
  import { getModalsContainerContext } from '../modals-container/ModalsContainer.svelte'
  import clsx from 'clsx'

  export let id: ModalId
  export let options: DefaultModalOptions | undefined

  const { title = '', content = '', size = 'medium', closeOnClickAway, closeOnEscape } =
    options || {}
  const { classNames } = getModalsContainerContext()

  function closeModal() {
    rootStore.close(id)
  }
</script>

<ModalBase>
  <ModalBox
    class={clsx('neat-default-modal', classNames.defaultModal)}
    {...options}
    on:close={closeModal}
  >
    <h2>{@html title}</h2>
    <p>{@html content}</p>
    <button type="button" on:click={closeModal} />
  </ModalBox>
</ModalBase>
