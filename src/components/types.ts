export type UID = number

export type TextFormField = {
  type?: 'text'
}

export type FormField = TextFormField

export type CommonModalOptions = {
  zIndex?: number
  closeOnEscape?: boolean
  closeOnClickAway?: boolean
}

export type ModalSize = 'small' | 'medium' | 'large'

export type TextModalOptions = CommonModalOptions & {
  type?: 'text' | null
  title?: string
  content: string
  size: ModalSize
}

export type FormModalOptions = CommonModalOptions & {
  type: 'form'
  size: ModalSize
  formFields?: Array<FormField>
  onSubmit(e: Event): any
}

export type ModalOptions = TextModalOptions | FormModalOptions

export type ModalProps = {
  id: UID
  options: ModalOptions
}

export type ClassNames = {
  modalBase?: string
  modalBaseInner?: string

  modalBox?: string
  modalBoxSmall?: string
  modalBoxMedium?: string
  modalBoxLarge?: string

  formModal?: string
  textModal?: string
}

export type ColorPalette = {
  primary?: {
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }

  gray?: {
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }
}

export type CssVars = Record<string, any>

export type ModalsContainerContext =
  | {
      classNames: ClassNames
    }
  | undefined
