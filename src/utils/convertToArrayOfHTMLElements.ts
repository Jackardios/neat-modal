export type SimpleDOMSelector =
  | HTMLElement
  | Array<HTMLElement>
  | HTMLCollection
  | NodeList
  | string

export type SimpleDomElements = Array<HTMLElement>

export default function convertToArrayOfHTMLElements(
  selector: SimpleDOMSelector
): SimpleDomElements {
  if (selector instanceof HTMLElement) {
    return [selector]
  }
  let elements =
    typeof selector === 'string' ? document.querySelectorAll(selector) : selector

  return elements ? Array.prototype.slice.call(elements) : []
}
