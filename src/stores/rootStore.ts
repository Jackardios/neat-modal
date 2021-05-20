import { get, writable } from 'svelte/store'
import { Readable } from 'svelte/types/runtime/store'
import { ModalProps, ModalOptions, ModalId } from '../components/modals/types'
import { defaultModalOptions } from '../components/modals/defaults'

interface RootStore<T> extends Readable<T> {
  getModalById(id: ModalId): ModalProps | undefined
  getTopModal(): ModalProps | undefined
  isTopModal(id: ModalId): boolean
  open(options: ModalOptions): ModalId
  close(id: ModalId): void
  closeTopModal(): ModalId | undefined
  info(options: ModalOptions): ModalId
  success(options: ModalOptions): ModalId
  warning(options: ModalOptions): ModalId
  error(options: ModalOptions): ModalId
}

export type StoreValue = {
  modals: Array<ModalProps>
}

function createRootStore(): RootStore<StoreValue> {
  const store = writable<StoreValue>({
    modals: []
  })

  let lastId = 0

  return {
    subscribe: store.subscribe,

    getModalById(id) {
      const { modals } = get(store) || {}

      if (!modals || !modals.length) {
        return undefined
      }

      return modals.find(function (modal) {
        return modal.id === id
      })
    },

    getTopModal() {
      const { modals } = get(store) || {}

      if (!modals || !modals.length) {
        return undefined
      }

      const sortedByZIndexModals = modals.sort(function (a, b) {
        const aZIndex = a.options.zIndex || 0
        const bZIndex = b.options.zIndex || 0
        return aZIndex - bZIndex
      })

      return sortedByZIndexModals[sortedByZIndexModals.length - 1]
    },

    isTopModal(id) {
      if (id) {
        const topModal = this.getTopModal()
        return !!(topModal && topModal.id === id)
      }
      return false
    },

    open(options) {
      const id = ++lastId

      store.update(store => ({
        ...store,
        modals: store.modals.concat({
          id,
          options: {
            ...defaultModalOptions,
            ...options
          }
        })
      }))

      return id
    },

    close(id) {
      store.update(store => ({
        ...store,
        modals: store.modals.filter(modal => {
          return modal.id !== id
        })
      }))
    },

    closeTopModal() {
      const topModal = this.getTopModal()
      if (topModal && topModal.id) {
        this.close(topModal.id)
        return topModal.id
      }
    },

    info(options) {
      return this.open({
        ...options,
        theme: 'info'
      })
    },

    success(options) {
      return this.open({
        ...options,
        theme: 'success'
      })
    },

    warning(options) {
      return this.open({
        ...options,
        theme: 'warning'
      })
    },

    error(options) {
      return this.open({
        ...options,
        theme: 'error'
      })
    }
  }
}

export const rootStore = createRootStore()
