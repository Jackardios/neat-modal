<style>
  .root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  .box {
    width: 100%;
    max-width: 480px;
    margin: 1rem;
    padding: 1.5rem;
    text-align: center;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .box__text {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0 0 2rem 0;
  }
  .brand {
    font-size: 2rem;
    color: #3b82f6;
  }

  .button {
    cursor: pointer;
    background-color: #fefefe;
    font-size: 1.125rem;
    padding: 0.5rem 1.5rem;
    border: 1px solid #dddddd;
    border-radius: 0.25rem;
    transition: 300ms ease;
  }

  .button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
  }

  .button:hover {
    border-color: #3b82f6;
    background-color: #fff;
    transform: scale(1.075);
  }

  .button:active {
    transform: scale(0.925);
  }
</style>

<script lang="ts">
  import { ModalsContainer, store } from 'neat-modal'

  window.modalsStore = store

  const openModal = () => {
    store.open({
      type: 'text',
      title: '<i>This</i> example modal',
      content: `
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Quisque lorem felis, ornare sed sem ac, molestie blandit urna.
          Curabitur vulputate ullamcorper leo ut imperdiet. Nunc in suscipit sapien,
          id facilisis erat. Proin ac malesuada dui, vel venenatis sapien. Nulla ullamcorper,
          urna in ornare dictum, enim odio sollicitudin quam, nec fermentum risus dolor
          nec sapien. Sed ullamcorper, est eu auctor accumsan, eros eros volutpat lorem,
          sit amet tincidunt lectus ante id mauris. Phasellus placerat ut libero pharetra pretium.
          Pellentesque finibus justo justo, sed facilisis magna commodo vel. Donec posuere magna mi,
          non vehicula mauris ullamcorper in. Aenean justo sapien, condimentum sit amet odio at,
          scelerisque bibendum nunc. Ut ultrices maximus efficitur. Praesent fringilla tellus orci,
          eu pretium tortor imperdiet sed. Praesent quis sem id orci vulputate dictum ac quis purus.
          Sed finibus iaculis facilisis. Phasellus at arcu ac arcu viverra convallis. Suspendisse potenti.
          </p>
          <p>
          Vivamus elementum tincidunt lacus vel faucibus. Phasellus congue, risus sed gravida pharetra,
          velit magna scelerisque quam, ut finibus velit sapien sit amet purus. In maximus malesuada leo,
          ac feugiat justo tincidunt quis. Pellentesque vitae dictum lacus, eget molestie tellus. Morbi at ex
          rhoncus, pellentesque arcu et, finibus nisi. Vestibulum iaculis tempus sapien, at gravida ligula laoreet ut.
          Mauris blandit orci vitae ipsum accumsan rhoncus. Nunc condimentum nulla sit amet luctus ultricies.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Etiam nisl justo, tincidunt quis leo ut, aliquam ullamcorper elit. Etiam euismod ipsum sapien, id
          luctus turpis ultricies gravida. Curabitur vel ante ligula. Suspendisse ornare iaculis mi, vitae hendrerit
          ligula aliquet ut. Duis lacinia leo id tempor suscipit. Sed sit amet suscipit augue.
          </p>
          `,
      size: 'small'
    })
  }
</script>

<main class="root">
  <div class="box">
    <h1 class="box__text">
      Click on this button to open the<br /><span class="brand">neat-modal</span>
    </h1>
    <button class="button" on:click={openModal}>Open</button>
    <ModalsContainer />
  </div>
</main>
