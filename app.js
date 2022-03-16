// import functions and grab DOM elements
import { buttons } from './array-buttons.js';
import { renderButtonsEl } from './render-buttons.js';
import { teams } from './array-teams.js';
import { renderTeamsEl } from './render-teams.js';
import { standings } from './array-standings.js';
import { renderStandings } from './render-standings.js';
import { matches } from './array-matches.js';
import { renderMatches } from './render-matches.js';

//create button section buttons using imported buttons array

const buttonSection = document.querySelector('#buttonSection');

for (let button of buttons) {
    const buttonEl = renderButtonsEl(button);

    buttonSection.append(buttonEl);
}

//add event listeners for button section

const headerButtons = document.querySelectorAll('.headerButtons');
const teamsButtonEl = document.querySelector('#Teams');
const standingsButtonEl = document.querySelector('#Standings');
const matchesButtonEl = document.querySelector('#Matches');

headerButtons.forEach(button => button.addEventListener('mouseover', function(){button.classList.add('button-hover');}));
headerButtons.forEach(button => button.addEventListener('mouseout', function(){button.classList.remove('button-hover');}));

teamsButtonEl.addEventListener('click', () => {
    teamsSection.classList.remove('hidden');
    standingsSection.classList.add('hidden');
    matchesSection.classList.add('hidden');

    teamsButtonEl.classList.add('active-button');
    standingsButtonEl.classList.remove('active-button');
    matchesButtonEl.classList.remove('active-button');
});

standingsButtonEl.addEventListener('click', () => {
    teamsSection.classList.add('hidden');
    standingsSection.classList.remove('hidden');
    matchesSection.classList.add('hidden');

    teamsButtonEl.classList.remove('active-button');
    standingsButtonEl.classList.add('active-button');
    matchesButtonEl.classList.remove('active-button');
});

matchesButtonEl.addEventListener('click', () => {
    teamsSection.classList.add('hidden');
    standingsSection.classList.add('hidden');
    matchesSection.classList.remove('hidden');

    teamsButtonEl.classList.remove('active-button');
    standingsButtonEl.classList.remove('active-button');
    matchesButtonEl.classList.add('active-button');
});



//create teams section using imported teams array
const teamsSection = document.querySelector('#teams');

for (let team of teams) {
    const teamCardEl = renderTeamsEl(team);

    teamsSection.append(teamCardEl);
}

//create standings table using imported standings array
const standingsSection = document.querySelector('#standings');
const standingsTableEl = document.querySelector('#standingsTable');

for (let position of standings) {
    const positionEl = renderStandings(position);

    standingsTableEl.append(positionEl);
}

//create matches section using imported matches array as well as joining to the previously imported teams array
const matchesSection = document.querySelector('#matches');

for (let match of matches) {
    const team1 = teams.find(team => {
        return team.id === match.opponents.team1id;
    });
    const team2 = teams.find(team => {
        return team.id === match.opponents.team2id;
    });

    const matchEl = renderMatches(match, team1, team2);

    matchesSection.append(matchEl);
}
