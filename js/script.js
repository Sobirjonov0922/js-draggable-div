let wrapper = document.querySelector('.wrapper'),
    header = wrapper.querySelector('.header')

function onDrag({movementX, movementY}) {
  let getStyle = window.getComputedStyle(wrapper)

  let left = parseInt(getStyle.left),
      top = parseInt(getStyle.top)
  
  wrapper.style.left = `${left + movementX}px`
  wrapper.style.top = `${top + movementY}px`
}

header.addEventListener('mousedown', function () {
  header.classList.add('active')
  header.addEventListener('mousemove', onDrag)
})
document.addEventListener('mouseup', function () {
  header.classList.remove('active')
  header.removeEventListener('mousemove', onDrag)
})