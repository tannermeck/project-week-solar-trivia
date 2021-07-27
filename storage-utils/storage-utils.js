export const USER = 'USER';

export function getUser() {
    return JSON.parse(localStorage.getItem(USER));
}

export function setUser(userObject) {
    localStorage.setItem(USER, JSON.stringify(userObject));
}

export function getProfile() {
    const user = getUser();
    const nameLi = document.getElementById('player-name');
    const avatar = document.getElementById('player-img');
    const scoreLi = document.getElementById('player-score');

    nameLi.textContent = user.name;
    avatar.src = `../assets/${user.race}.png`;
    scoreLi.textContent = user.score;
}
export function incrementScore(){
    const user = getUser();
    user.score += 1;
    setUser(user);
}

