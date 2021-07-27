export const USER = 'USER';
export const LEADERBOARD = 'LEADERBOARD';

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

export function getLeaderboard() {
    return JSON.parse(localStorage.getItem(LEADERBOARD) || '[]');
}

export function setLeaderboard(leaderboard) {
    localStorage.setItem(LEADERBOARD, JSON.stringify(leaderboard));
}
