export function scrollVertical(event) {
    event.preventDefault()
    window.scrollBy({
      left: 0, 
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }
