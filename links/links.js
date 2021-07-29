import { getProfile, getUser } from '../storage-utils/storage-utils.js';
import planets from '../data/data.js';

getProfile();

const user = getUser();

if (user.completed.length === planets.length) {
    window.location.replace('../results');
}

for (let planet of planets) {
    createLink(planet);
}

function createLink(planet) {
    const planetOptions = document.getElementById('planet-options');
    const planetLink = document.createElement('a');

    planetLink.style.color = 'yellowgreen';
    planetLink.textContent = planet.title;
    planetOptions.appendChild(planetLink);

    if (!user.completed.includes(planet.id)) {
        const planetUrl = `../trivia/?planetId=${planet.id}`;
        planetLink.href = planetUrl;
        planetLink.style.color = 'white';
    } 
}





