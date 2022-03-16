export function renderTeamsEl(team) {
    const teamCardEl = document.createElement('div');
    teamCardEl.classList.add('teamCard');

    const teamImageEl = document.createElement('img');
    teamImageEl.src = `assets/${team.shortName}.png`;
    teamImageEl.alt = team.shortName;
    teamImageEl.classList.add('teamImage');

    const teamNameEl = document.createElement('h2');
    teamNameEl.textContent = team.name;

    const teamFoundedEl = document.createElement('h3');
    teamFoundedEl.textContent = team.founded;

    const teamNicknameEl = document.createElement('h3');
    teamNicknameEl.textContent = team.nicknames;

    teamCardEl.append(teamImageEl, teamNameEl, teamFoundedEl, teamNicknameEl);
    
    return teamCardEl;
}