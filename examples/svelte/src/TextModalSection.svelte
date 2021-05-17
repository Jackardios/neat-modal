<script lang="ts">
  import { store } from 'neat-modal'
  import Section from './Section.svelte'
  import Button from './Button.svelte'

  window.store = store
  const openTextModal = () => {
    store.open({
      size: 'small',
      title: 'This is <i>default modal</i> with fish text',
      description: 'Cardinalfish Pacific herring wrymouth',
      content: `
          <p>Bluntnose minnow yellow bass panga handfish parrotfish,
          "sand knifefish collared dogfish bonnetmouth crocodile icefish?"
          Surf sardine driftwood catfish salmon loach broadband dogfish gouramie
          hardhead catfish sawfish half-gill bandfish. Southern smelt porgy
          Canthigaster rostrata blue whiting--collared carpetshark mustard eel.
          Weeverfish longnose chimaera: smalltooth sawfish carpetshark inanga stonecat,
          scup. Black prickleback jewfish northern lampfish Atlantic cod mudfish
          bat ray halosaur elephant fish.</p>
          <p>Celebes rainbowfish gurnard ladyfish halibut, queen danio; mudsucker
          banded killifish lake chub tenuis lampfish, armored gurnard Bitterling.
          Saber-toothed blenny elasmobranch, yellowfin tuna clownfish beaked salmon.
          Lenok, blackchin galjoen fish false moray Atlantic salmon sarcastic fringehead.</p>
          `
    })
  }
</script>

<Section>
  <svelte:fragment slot="title">Text modal</svelte:fragment>
  <svelte:fragment slot="description">
    Click on this button to open the default modal with fish text
  </svelte:fragment>
  <Button slot="button" on:click={openTextModal}>Open</Button>
</Section>
