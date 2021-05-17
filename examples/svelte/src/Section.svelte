<style lang="postcss">
  .section {
    margin: 0;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #dddddd;
  }

  .section__title {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
  }

  .section__description {
    margin-top: 1rem;
    font-size: 1rem;
    color: #71717a;
  }

  .section__button-container {
    margin-top: 1rem;
  }
</style>

<section class="section">
  <div class="container">
    <h1 class="section__title">
      <slot name="title" />
    </h1>
    <div class="section__description"><slot name="description" /></div>
    <div class="section__button-container">
      <slot name="button" />
    </div>
    <slot />
  </div>
</section>
