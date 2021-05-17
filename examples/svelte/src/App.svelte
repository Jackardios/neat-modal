<style lang="postcss" global>
  @import 'neat-modal/dist/styles/neat-modal.css';
  @import 'neat-modal/dist/styles/neat-modal-theme-default.css';

  html,
  body {
    position: relative;
  }

  body {
    color: #333;
    margin: 0;
    padding: 0;
    background-color: #eeeeee;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans,
      Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .container {
    max-width: 1280px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<script lang="ts">
  import { ModalsContainer } from 'neat-modal'
  import TextModalSection from './TextModalSection.svelte'
</script>

<main class="root">
  <TextModalSection />
  <TextModalSection />
</main>
<ModalsContainer />
