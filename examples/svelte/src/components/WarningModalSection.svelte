<script lang="ts">
  import { store } from 'neat-modal'
  import Section from './Section.svelte'
  import Button from './Button.svelte'
  import { lorem, loremHTML } from '../utils/lorem'

  window.store = store
  const openModal = () => {
    store.warning({
      size: 'small',
      title: 'Warning',
      description: lorem.generateSentences(1),
      content: loremHTML.generateParagraphs(2)
    })
  }
</script>

<Section>
  <svelte:fragment slot="title">Warning modal</svelte:fragment>
  <svelte:fragment slot="description">
    Click on this button to open the warning modal with fish text
  </svelte:fragment>
  <Button slot="button" on:click={openModal}>Open warning modal</Button>
</Section>
