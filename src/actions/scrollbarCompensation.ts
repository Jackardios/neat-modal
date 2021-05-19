import type { ModalScrollbarCompensationOptions } from '../components/modals/types'
import convertToArrayOfHTMLElements from '../utils/convertToArrayOfHTMLElements'
import getScrollbarWidth from '../utils/getScrollbarWidth'

export let scrollbarCompensationCount = 0

export default function scrollbarCompensation(
  node: HTMLElement,
  options: ModalScrollbarCompensationOptions | undefined
) {
  if (options === false) {
    return
  }
  if (options === undefined || options === true) {
    options = {
      targetElements: document.body
    }
  }
  const targetElements = convertToArrayOfHTMLElements(options.targetElements)
  scrollbarCompensationCount++
  if (scrollbarCompensationCount === 1) {
    targetElements.forEach(element => {
      element.style.paddingRight = `${getScrollbarWidth()}px`
    })
  }

  return {
    destroy() {
      scrollbarCompensationCount--
      if (scrollbarCompensationCount < 1) {
        targetElements.forEach(element => {
          element.style.removeProperty('padding-right')
        })
      }
    }
  }
}
