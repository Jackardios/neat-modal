import { FormField } from '../form-fields/types'

export type ModalId = number
export type ModalOptions = DefaultModalOptions
export type ModalSize = 'small' | 'medium' | 'large'

export type CommonModalOptions = {
  zIndex?: number
  closeOnEscape?: boolean
  closeOnClickAway?: boolean
}

export type DefaultModalOptions = CommonModalOptions & {
  type?: 'default'
  size?: ModalSize
  title?: string
  content?: string
  formFields?: Array<FormField>
  onSubmit?(e: Event): any
}

export type ModalProps = {
  id: ModalId
  options: ModalOptions
}
