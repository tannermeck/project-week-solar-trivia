import { getProfile } from '../storage-utils/storage-utils.js';
import planets from '../data/data.js';
import { getById } from '../storage-utils/helpers.js';

getProfile();

const answerForm = document.getElementById('answer-form');
const searchParams = new URLSearchParams(window.location.search);

const planet = getById(planets, +searchParams.get('planetId'));
console.log(planet);