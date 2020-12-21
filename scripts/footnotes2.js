const footnotelink = document.querySelectorAll('.annotation-link');
const footnote = document.querySelectorAll('.annotation');
var fnVal = [];

// remembers original footnote label - allows for custom ones
// for (let i = 0; i < footnotelink.length; i++) {
//   fnVal.push(footnotelink[i].firstChild.textContent);
// }

// builds event listeners for each footnote link. Requires an <a> tag with class 'annotation-link' and a matching tag with class 'annotation' just below it.
for (let i = 0; i < footnotelink.length; i++) {
  footnoteInteract = function() {
    if (footnote[i].classList.contains('annotation-expanded', 'annotation-displayed')) {
      footnote[i].classList.remove('annotation-expanded', 'annotation-displayed');
      footnotelink[i].classList.remove('annotation-link-selected');
      // footnotelink[i].firstChild.textContent = fnVal[i];
    } else {
      footnote[i].classList.add('annotation-expanded', 'annotation-displayed');
      footnotelink[i].classList.add('annotation-link-selected');
      // footnotelink[i].firstChild.textContent = 'X';
    }
  }

  footnotelink[i].addEventListener('click', footnoteInteract);
}

// option to open or close all annotations
// not efficiently coded - not very DRY - but it works
const fnButton = document.querySelectorAll('.annotation-button');
var optionOpenText = 'Open all Footnotes';
var optionCloseText = 'Close all Footnotes';

// ensures button values matches starting state
for (let i = 0; i < fnButton.length; i++) {
  fnButton[i].textContent = optionOpenText;
}

// builds the event listeners for the buttons
for (let i = 0; i < fnButton.length; i++) {
  footnoteOpenClose = function() {
    if (fnButton[i].textContent == optionOpenText) {
      for (let j = 0; j < footnote.length; j++) {
        footnote[j].classList.add('annotation-expanded', 'annotation-displayed');
        footnotelink[j].classList.add('annotation-link-selected');
        // footnotelink[j].firstChild.textContent = 'X';
      }
      for (let i = 0; i < fnButton.length; i++) {
        fnButton[i].textContent = optionCloseText;
      }
    } else if (fnButton[i].textContent == optionCloseText) {
      for (let j = 0; j < footnote.length; j++) {
        footnote[j].classList.remove('annotation-expanded', 'annotation-displayed');
        footnotelink[j].classList.remove('annotation-link-selected');
        // footnotelink[j].firstChild.textContent = fnVal[j];
      }
      for (let i = 0; i < fnButton.length; i++) {
        fnButton[i].textContent = optionOpenText;
      }
    }
  }

  fnButton[i].addEventListener('click', footnoteOpenClose);
}
