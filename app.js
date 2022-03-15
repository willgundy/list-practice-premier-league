// import functions and grab DOM elements
import { buttons } from './array-buttons';
import { renderButtonsEl } from './render-buttons';

const buttonSection = document.querySelector('#buttonSection');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


  // let state

// set event listeners 

for (let button of buttons) {
    const buttonEl = renderButtonsEl(button);

    buttonSection.append(buttonEl);
    addMouseOverEvents();
}


function addMouseOverEvents() {
    const headerButtons = document.querySelectorAll('.headerButtons');
    headerButtons.forEach(button => button.addEventListener('mouseover', function(){button.classList.add('button-hover');}));
    headerButtons.forEach(button => button.addEventListener('mouseout', function(){button.classList.remove('button-hover');}));
}



