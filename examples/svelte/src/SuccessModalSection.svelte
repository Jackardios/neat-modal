<script lang="ts">
  import { store } from 'neat-modal'
  import Section from './Section.svelte'
  import Button from './Button.svelte'

  window.store = store
  const openTextModal = () => {
    store.success({
      size: 'small',
      title: 'Success',
      description: 'Cardinalfish Pacific herring wrymouth'
    })
  }
</script>

<Section>
  <svelte:fragment slot="title">Success modal</svelte:fragment>
  <svelte:fragment slot="description">
    Click on this button to open the success modal with fish text
  </svelte:fragment>
  <Button slot="button" on:click={openTextModal}>Open text modal</Button>
</Section>
