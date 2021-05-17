<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import type { ModalId, ModalOptions, ModalProps } from './types'
  import DefaultModal from './DefaultModal.svelte'

  export let id: ModalId
  export let options: ModalOptions

  const { type = 'default' } = options || {}

  const typeMapping = {
    default: DefaultModal
    // TODO: More modal types
  }

  onMount(function () {
    if (options.onMount) {
      options.onMount($$props)
    }
  })

  onDestroy(function () {
    if (options.onDestroy) {
      options.onDestroy($$props)
    }
  })
</script>

{#if typeMapping[type]}
  <svelte:component this={typeMapping[type]} {id} {options} />
{/if}
