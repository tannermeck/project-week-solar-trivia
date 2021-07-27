import { getProfile } from '../storage-utils/storage-utils.js';
import planets from '../data/data.js';




getProfile();

for (let planet of planets) {
    createLink(planet);
}


function createLink(planet) {
    const planetOptions = document.getElementById('planet-options');
    const planetLink = document.createElement('a');
    const planetUrl = `../trivia/?planetId=${planet.id}`;
    planetLink.href = planetUrl;
    planetLink.textContent = planet.title;
    planetOptions.appendChild(planetLink);
}





