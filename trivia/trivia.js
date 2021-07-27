import { getProfile, incrementScore, getUser, setUser } from '../storage-utils/storage-utils.js';
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
    const selection = +selected.get('answer');
    const results = document.getElementById('results');
    answerForm.classList.add('hide');
    if (planet.correct === selection){
        incrementScore();
        results.textContent = 'You guessed right!';
    } else {
        const correctAnswer = getById(planet.choices, planet.correct).answer;
        const selectionAnswer = getById(planet.choices, selection).answer;
        results.textContent = `You guessed ${selectionAnswer}, the correct answer is ${correctAnswer}`;
    }
    getProfile();
    const link = document.getElementById('return');
    link.classList.remove('hide');
    const user = getUser();
    user.completed.push(planet.id);
    setUser(user);
});

