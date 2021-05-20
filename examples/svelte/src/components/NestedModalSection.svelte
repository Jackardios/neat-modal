<script lang="ts">
  import { store } from 'neat-modal'
  import Section from './Section.svelte'
  import Button from './Button.svelte'
  import { lorem, loremHTML } from '../utils/lorem'

  window.store = store
  const openModal = () => {
    store.open({
      size: 'small',
      title: 'Nested modal',
      description: lorem.generateSentences(1),
      content: loremHTML.generateParagraphs(2),
      buttons: [
        {
          theme: 'primary',
          text: 'Open nested modal',
          onMount(modalButtonHTMLElement: HTMLElement): any {
            modalButtonHTMLElement.addEventListener(
              'click',
              function () {
                openModal()
              },
              false
            )
          }
        }
      ]
    })
  }
</script>

<Section>
  <svelte:fragment slot="title">Nested modal</svelte:fragment>
  <svelte:fragment slot="description">
    Click on this button to open the nested modal
  </svelte:fragment>
  <Button slot="button" on:click={openModal}>Open nested modal</Button>
</Section>
