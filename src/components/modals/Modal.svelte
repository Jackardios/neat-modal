<script lang="ts">
  import type { ModalId, ModalOptions } from './types'
  import DefaultModal from './DefaultModal.svelte'

  export let id: ModalId
  export let options: ModalOptions

  const { type = 'default' } = options || {}

  const mapping = {
    default: DefaultModal

    // TODO: More components
  }
</script>

{#if mapping[type]}
  <svelte:component this={mapping[type]} {id} {options} />
{/if}
