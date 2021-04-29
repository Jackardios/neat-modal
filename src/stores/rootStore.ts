import { writable } from 'svelte/store'
import { Readable } from 'svelte/types/runtime/store'
import { ModalProps, ModalOptions, UID } from '../components/types'

interface RootStore<T> extends Readable<T> {
  open(options: ModalOptions): UID
  close(id: UID): void
}

export type StoreValue = {
  modals: Array<ModalProps>
}

function createRootStore(): RootStore<StoreValue> {
  const { subscribe, set, update } = writable<StoreValue>({
    modals: []
  })

  let lastId = 0

  return {
    subscribe,
    open(options) {
      const id = ++lastId

      update(store => ({
        ...store,
        modals: store.modals.concat({
          id,
          options
        })
      }))

      return id
    },
    close(id) {
      update(store => ({
        ...store,
        modals: store.modals.filter(modal => {
          return modal.id !== id
        })
      }))
    }
  }
}

export const rootStore = createRootStore()
