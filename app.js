// import functions and grab DOM elements
import { buttons } from './array-buttons.js';
import { renderButtonsEl } from './render-buttons.js';
import { teams } from './array-teams.js';
import { renderTeamsEl } from './render-teams.js';

//create button section buttons using imported buttons array

const buttonSection = document.querySelector('#buttonSection');

for (let button of buttons) {
    const buttonEl = renderButtonsEl(button);

    buttonSection.append(buttonEl);
}

//add event listeners for button section

const headerButtons = document.querySelectorAll('.headerButtons');

headerButtons.forEach(button => button.addEventListener('mouseover', function(){button.classList.add('button-hover');}));
headerButtons.forEach(button => button.addEventListener('mouseout', function(){button.classList.remove('button-hover');}));


const teamsSection = document.querySelector('#teams');

for (let team of teams) {
    const teamCardEl = renderTeamsEl(team);

    teamsSection.append(teamCardEl);
}
