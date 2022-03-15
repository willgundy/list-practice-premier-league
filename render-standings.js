export function renderStandings(position) {
    const positionEl = document.createElement('tr');

    const dummyColumnEl = document.createElement('td');

    const teamNameEl = document.createElement('td');
    teamNameEl.textContent = position.name;

    const gamesPlayedEl = document.createElement('td');
    gamesPlayedEl.textContent = position.gamesPlayed;

    const winsEl = document.createElement('td');
    winsEl.textContent = position.wins;
    
    const drawsEl = document.createElement('td');
    drawsEl.textContent = position.draw;

    const lossesEl = document.createElement('td');
    lossesEl.textContent = position.losses;

    const goalsForEl = document.createElement('td');
    goalsForEl.textContent = position.goalsFor;

    const goalsAgainstEl = document.createElement('td');
    goalsAgainstEl.textContent = position.goalsAgainst;

    const goalDifferenctialEl = document.createElement('td');
    goalDifferenctialEl.textContent = position.goalsFor - position.goalsAgainst;

    const pointsEl = document.createElement('td');
    pointsEl.textContent = position.points;

    const lastFive = document.createElement('td');
    lastFive.classList.add('lastFive');

    const lastFiveResults = position.lastFive;
    console.log(lastFiveResults);

    for (let result in lastFiveResults) {
        const resultEl = document.createElement('p');

        console.log(result);

        if (lastFiveResults[result] === 'W') {
            resultEl.innerHTML = '&#9989;';
        } else if (lastFiveResults[result] === 'L') {
            resultEl.innerHTML = '&#128683;';
        } else if (lastFiveResults[result] === 'T') {
            resultEl.innerHTML = '&#9898;';
        } else {
            resultEl.textContent = 'something is wrong in the array';
        }

        lastFive.append(resultEl);
    }

    positionEl.append(dummyColumnEl, teamNameEl, gamesPlayedEl, winsEl, drawsEl, lossesEl, goalsForEl, goalsAgainstEl, goalDifferenctialEl, pointsEl, lastFive);

    return positionEl;
}