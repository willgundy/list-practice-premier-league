export function renderMatches(match, team1, team2) {
    const matchCard = document.createElement('div');
    matchCard.classList.add('matchCard');

    const matchCardTeamSection = document.createElement('div');
    matchCardTeamSection.classList.add('matchCardTeamSection');

    const team1El = document.createElement('div');
    team1El.classList.add('teamRow');

    const team1Image = document.createElement('img');
    team1Image.src = `assets/${team1.shortName}.png`;
    team1Image.alt = team1.shortName;

    const team1Name = document.createElement('p');
    team1Name.textContent = team1.name;

    team1El.append(team1Image, team1Name);

    const team2El = document.createElement('div');
    team2El.classList.add('teamRow');

    const team2Image = document.createElement('img');
    team2Image.src = `assets/${team2.shortName}.png`;
    team2Image.alt = team2.shortName;

    const team2Name = document.createElement('p');
    team2Name.textContent = team2.name;

    team2El.append(team2Image, team2Name);

    matchCardTeamSection.append(team1El, team2El);

    const matchCardTimeSection = document.createElement('div');
    matchCardTimeSection.classList.add('matchCardTimeSection');

    const divEl = document.createElement('div');
    const dateEl = document.createElement('p');
    dateEl.textContent = match.matchDay;
    const timeEl = document.createElement('p');
    timeEl.textContent = match.matchTime;

    matchCardTimeSection.append(divEl, dateEl, timeEl);


    matchCard.append(matchCardTeamSection, matchCardTimeSection);

    return matchCard;
}