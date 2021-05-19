import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import type { BodyScrollOptions } from 'body-scroll-lock'

export default function bodyScrollLock(
  node: HTMLElement,
  options: BodyScrollOptions | undefined = undefined
) {
  disableBodyScroll(node, options)

  return {
    destroy() {
      enableBodyScroll(node)
    }
  }
}
