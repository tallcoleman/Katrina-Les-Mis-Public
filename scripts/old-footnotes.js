// Not used - I think this was the original I looked at (but written in a preprocesser language, not plain JS)

// helper
const selectAll = (selector, root = document) => {
  return Array.prototype.slice.call(root.querySelectorAll(selector), 0)
}

// select annotations and annotation links
const annotationLinks = selectAll('.annotation-link')
const annotations = selectAll('.annotation')

const toggleAnnotation = ({ currentTarget: el }) => {
  const annotationLinkId = el.dataset.id
  const isSelected = el.classList.contains('annotation-link-selected')
  const annotationContainer = document.querySelector(`.annotation[data-id="${annotationLinkId}"]`)

  el.classList.toggle('annotation-link-selected')

  if (isSelected) {
    annotationContainer.classList.toggle('annotation-expanded')
    setTimeout(() => { annotationContainer.classList.toggle('annotation-displayed') }, 300)
  } else {
    annotationContainer.classList.toggle('annotation-displayed')
    setTimeout(() => { annotationContainer.classList.toggle('annotation-expanded') }, 300)
  }
}

const closeAnnotation = ({ currentTarget: el }) => {

  // https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection
  if (window.getSelection().type === "Range") { return }

  const annotationContainerId = el.dataset.id
  const annotationLink = document.querySelector(`.annotation-link[data-id="${annotationContainerId}"]`)

  annotationLink.classList.remove('annotation-link-selected')

  el.classList.toggle('annotation-expanded')
  setTimeout(() => { el.classList.toggle('annotation-displayed') }, 300)
}

// Loop through all annotation links
annotationLinks.forEach((el, index) => {
  // Adds matching data ids to annotations and containers
  el.setAttribute('data-id', index + 1)

  // Clicking an annotation link expands/collapses the annotation
  el.addEventListener('click', toggleAnnotation)
})

// Loop through all annotations
annotations.forEach((el, index) => {
  // Adds matching data ids to annotations and containers
  el.setAttribute('data-id', index + 1)

  // Clicking the content of an annotation collapses it, too
  el.addEventListener('click', closeAnnotation)

  // Prevent annotation from hiding if link in annotation is clicked
  el.querySelector('a').addEventListener('click', e => e.stopPropagation())
})
