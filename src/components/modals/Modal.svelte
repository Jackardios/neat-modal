<script lang="ts">
  import { onMount, onDestroy, setContext } from 'svelte'
  import type {
    ModalId,
    ModalOptions,
    ModalRootHTMLElement,
    SetModalRootHTMLElement
  } from './types'
  import DefaultModal from './DefaultModal.svelte'

  export let id: ModalId
  export let options: ModalOptions
  const { type = 'default' } = options || {}

  const typeMapping = {
    default: DefaultModal
    // TODO: More modal types
  }

  let rootHTMLElement: ModalRootHTMLElement
  const setRootHTMLElement: SetModalRootHTMLElement = function (newRootHTMLElement) {
    rootHTMLElement = newRootHTMLElement
  }
  setContext('setRootHTMLElement', setRootHTMLElement)

  onMount(function () {
    if (options.onMount) {
      options.onMount(rootHTMLElement, $$props)
    }
  })

  onDestroy(function () {
    if (options.onDestroy) {
      options.onDestroy(rootHTMLElement, $$props)
    }
  })
</script>

{#if typeMapping[type]}
  <svelte:component this={typeMapping[type]} {id} {options} />
{/if}
