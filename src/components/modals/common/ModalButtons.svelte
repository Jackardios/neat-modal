<script lang="ts">
  import type { ModalButton as TModalButton } from '../types'
  import ModalButton from './ModalButton.svelte'

  export let buttons: Array<TModalButton> | undefined = null
</script>

{#if buttons && buttons.length}
  <div class="neat-modal-buttons">
    {#each buttons as button}
      <div class="neat-modal-buttons__item">
        <ModalButton {...button} />
      </div>
    {/each}
  </div>
{/if}
