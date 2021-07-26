import { setUser } from '../storage-utils/storage-utils.js';
import { createUser } from '../data/create-user.js';

const form = document.getElementById('user-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formDataObj = new FormData(form);
    const createdPlayer = createUser(formDataObj);
    setUser(createdPlayer);
});



