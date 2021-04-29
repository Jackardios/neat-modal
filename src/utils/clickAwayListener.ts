export default function clickAwayListener(node: HTMLElement) {
  function handleClick(event: Event) {
    if (
      event.target instanceof HTMLElement &&
      node &&
      !node.contains(event.target) &&
      !event.defaultPrevented
    ) {
      node.dispatchEvent(new CustomEvent('clickAway'))
    }
  }

  document.addEventListener('click', handleClick, true)

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true)
    }
  }
}
