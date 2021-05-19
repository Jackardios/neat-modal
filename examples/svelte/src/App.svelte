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
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }

    &__title {
      font-size: 2rem;
      margin: 0;
    }

    &__description {
      font-size: 1rem;
      color: #71717a;
      margin: 0.5rem 0 0 0;
    }
  }

  .header-links {
    display: flex;
    justify-content: center;
    margin: 0.5rem -0.5rem -0.5rem -0.5rem;
    &__item {
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      margin: 0.5rem;
      font-size: 0.875rem;
      text-decoration: none;
      border-radius: 0.25rem;
      background-color: #e4e4e7;
      color: #222222;
      transform: scale(1) translateZ(0);
      transition: all 300ms ease;

      &:focus,
      &:hover {
        background-color: #d4d4d8;
        transform: scale(1.075) translateZ(0);
      }

      &:active {
        transform: scale(0.925) translateZ(0);
      }
    }
  }

  .brand {
    font-weight: bold;
    color: #3b82f6;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
</style>

<script lang="ts">
  import { ModalsContainer } from 'neat-modal'
  import TextModalSection from './TextModalSection.svelte'
  import SuccessModalSection from './SuccessModalSection.svelte'
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
      <div class="header__description">Neat modals for svelte or vanilla js</div>
      <div class="header-links">
        <a href="http://npmjs.com/package/neat-modal" class="header-links__item">NPM</a>
        <a href="https://github.com/Jackardios/neat-modal/" class="header-links__item"
          >Github</a
        >
        <a
          href="https://github.com/Jackardios/neat-modal/tree/master/examples"
          class="header-links__item"
        >
          Sources
        </a>
      </div>
    </div>
  </header>
  <TextModalSection />
  <SuccessModalSection />
</main>
<ModalsContainer />
