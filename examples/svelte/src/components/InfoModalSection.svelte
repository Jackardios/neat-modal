<script lang="ts">
  import { store } from 'neat-modal'
  import Section from './Section.svelte'
  import Button from './Button.svelte'
  import { lorem, loremHTML } from '../utils/lorem'

  window.store = store
  const openModal = () => {
    store.info({
      size: 'small',
      title: 'Info',
      description: lorem.generateSentences(1),
      content: loremHTML.generateParagraphs(2)
    })
  }
</script>

<Section>
  <svelte:fragment slot="title">Info modal</svelte:fragment>
  <svelte:fragment slot="description">
    Click on this button to open the info modal with fish text
  </svelte:fragment>
  <Button slot="button" on:click={openModal}>Open info modal</Button>
</Section>
