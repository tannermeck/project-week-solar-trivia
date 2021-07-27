import { getProfile, incrementScore } from '../storage-utils/storage-utils.js';
import planets from '../data/data.js';
import { getById } from '../storage-utils/helpers.js';

getProfile();

const question = document.getElementById('question');
const answerForm = document.getElementById('answer-form');
const searchParams = new URLSearchParams(window.location.search);

const planet = getById(planets, +searchParams.get('planetId'));
question.textContent = planet.question;

for (let choice of planet.choices){
    const radio = document.createElement('input');
    const span = document.createElement('span');
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'answer';
    span.textContent = choice.answer;
    const label = document.createElement('label');
    label.append(radio, span);
    question.appendChild(label);
}
answerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selected = new FormData(answerForm);
    const selection = selected.get('answer');
    if (planet.correct === +selection){
        incrementScore();
    } else {
        alert('YOU LOST');
    } getProfile();
});