// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


  // let state

// set event listeners 

const headerButtons = document.querySelectorAll('.headerButtons');
headerButtons.forEach(button => button.addEventListener('mouseover', function(){button.classList.add('button-hover');}));
headerButtons.forEach(button => button.addEventListener('mouseout', function(){button.classList.remove('button-hover');}));