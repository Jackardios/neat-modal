import { FormField } from '../form-fields/types'
import { Override } from '../../types'

export type ModalId = number
export type ModalSize = 'small' | 'medium' | 'large'
export type ModalType = 'default'
export type ModalTheme = 'default' | 'primary' | 'success' | 'warning' | 'error'

export type ModalButtonType = 'button' | 'submit' | 'reset' | 'close' | 'link'
export type ModalButtonTheme = 'default' | 'primary' | 'success' | 'warning' | 'error'
export type ModalButtonAttribute = {
  [key: string]: string
}
export type ModalButton = {
  type?: ModalButtonType
  theme?: ModalButtonTheme
  text?: string
  attributes?: Array<ModalButtonAttribute>
  onMount?(modalButtonHTMLElement: HTMLElement): any
  onDestroy?(modalButtonHTMLElement: HTMLElement): any
}

export type CommonModalOptions = {
  type?: ModalType
  theme?: ModalTheme
  size?: ModalSize
  zIndex?: number
  title?: string
  description?: string
  content?: string
  disableCloseOnEscape?: boolean
  disableCloseOnBackdropClick?: boolean
  hideBackdrop?: boolean
  formFields?: Array<FormField>
  buttons?: Array<ModalButton>
  onSubmit?(e: Event): any
  onMount?(modalHTMLElement: HTMLElement | undefined, modalProps: ModalProps): any
  onDestroy?(modalHTMLElement: HTMLElement | undefined, modalProps: ModalProps): any
}

export type DefaultModalOptions = Override<
  CommonModalOptions,
  {
    type?: 'default'
  }
>

export type ModalOptions = DefaultModalOptions // there will be more modal types in the future
export type ModalProps = {
  id: ModalId
  options: ModalOptions
}

export type ModalRootHTMLElement = HTMLElement | undefined
export type SetModalRootHTMLElement = {
  (rootHTMLElement: ModalRootHTMLElement): any
}
