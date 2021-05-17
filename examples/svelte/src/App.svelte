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
    background-color: #ffffff;
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
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

    @media (min-width: 720px) {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  .header {
    text-align: center;
    margin: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #dddddd;
    background-color: #f4f4f5;

    @media (min-width: 720px) {
      font-size: 2rem;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }

    &__title {
      font-size: 2rem;
      margin: 0;
    }

    &__description {
      font-size: 1.25rem;
      margin: 0.5rem 0 0 0;
    }
  }

  .brand {
    font-weight: bold;
    color: #3b82f6;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .link {
    position: relative;
    display: inline-block;
    color: inherit;
    opacity: 0.75;
    color: rgb(59, 130, 246);
    text-decoration: none;
    transition: opacity 300ms ease;

    &:hover {
      opacity: 1;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 3px;
      background-color: rgba(59, 130, 246, 0.25);
    }
  }
</style>

<script lang="ts">
  import { ModalsContainer } from 'neat-modal'
  import TextModalSection from './TextModalSection.svelte'
</script>

<main class="root">
  <header class="header">
    <div class="container">
      <h1 class="header__title">
        <a
          class="brand"
          href="https://github.com/Jackardios/neat-modal/"
          target="_blank"
          rel="noopener noreferrer">Neat-modal</a
        >
      </h1>
      <p class="header__description">
        <a
          class="link"
          href="https://svelte.dev/"
          target="_blank"
          rel="noopener noreferrer">Svelte 3</a
        > examples
      </p>
    </div>
  </header>
  <TextModalSection />
</main>
<ModalsContainer />
