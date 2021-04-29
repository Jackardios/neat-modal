<script lang="ts">
  import type { UID, ModalOptions } from '../types'
  import TextModal from './TextModal.svelte'
  import FormModal from './FormModal.svelte'

  export let id: UID
  export let options: ModalOptions

  const { type = 'text' } = options || {}

  const mapping = {
    text: TextModal,
    form: FormModal
  }
</script>

{#if mapping[type]}
  <svelte:component this={mapping[type]} {id} {options} />
{/if}
