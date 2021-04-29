import { CssVars } from '../types'

export default function cssVars(node: HTMLElement, cssVars: CssVars) {
  Object.entries(cssVars).forEach(([key, value]) => {
    node.style.setProperty(`--${key}`, value)
  })

  return {
    update(newCssVars: Record<string, any>) {
      Object.entries(newCssVars).forEach(([key, value]) => {
        node.style.setProperty(`--${key}`, value)
        delete cssVars[key]
      })

      Object.keys(cssVars).forEach(name => node.style.removeProperty(`--${name}`))
      cssVars = newCssVars
    }
  }
}
