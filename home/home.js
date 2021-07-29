import { setUser } from '../storage-utils/storage-utils.js';
import { createUser } from '../data/create-user.js';

const form = document.getElementById('user-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formDataObj = new FormData(form);
    const createdPlayer = createUser(formDataObj);
    setUser(createdPlayer);
    window.location = 'links';
});

const alien = document.getElementById('alien-image');
const human = document.getElementById('human-image');
const bug = document.getElementById('bug-image');

const alienLabel = document.getElementById('alien-label');
const humanLabel = document.getElementById('human-label');
const bugLabel = document.getElementById('bug-label');



humanLabel.addEventListener('click', () => {
    humanLabel.classList.add('selected-earth');
    human.classList.remove('notSelectedColor'); 
});

alienLabel.addEventListener('click', () => {
    humanLabel.classList.remove('selected-earth');
    human.classList.add('notSelectedColor');
    alien.classList.add('notSelectedColor');

});

bugLabel.addEventListener('click', () => {
    humanLabel.classList.remove('selected-earth');
    human.classList.add('notSelectedColor');
    bug.classList.add('notSelectedColor');
});


