<style lang="postcss">
  .button {
    cursor: pointer;
    display: inline-block;
    padding: 0.75rem 1.75rem;
    appearance: none;
    background: #e4e4e7;
    border: none;
    border-radius: 0.25rem;
    font-weight: 500;
    font-size: 0.875rem;
    color: #18181b;
    transition: background-color 300ms ease, transform 300ms ease;

    &:focus,
    &:hover {
      background: #d4d4d8;
      transform: scale(1.075) translateZ(0);
    }

    &:active {
      transform: scale(0.925) translateZ(0);
    }

    &--success {
    }

    &--warning {
    }

    &--error {
    }
  }
</style>

<button type="button" class="button" on:click {...$$restProps}><slot /></button>
