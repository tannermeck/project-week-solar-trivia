import { getLeaderboard, getUser, setUser, setLeaderboard } from '../storage-utils/storage-utils.js';

const olList = document.getElementById('high-scores');
const userScore = document.getElementById('user-score');

const user = getUser();

let leaderboard = getLeaderboard();

if (user) {
    leaderboard.push(user);
}

setUser(null);

setLeaderboard(leaderboard);

userScore.textContent = `${user.name}, Your score is ${user.score}0%`;

const sortedLeaderBoard = leaderboard.sort(function(a, b){
    return b.score - a.score;
});

const topTen = sortedLeaderBoard.slice(0, 9);

for (let leader of topTen){
    const li = document.createElement('li');
    const image = document.createElement('img');
    image.src = `../assets/${leader.race}.png`;
    li.textContent = `${leader.name} | ${leader.race} | ${leader.score}0%`;
    olList.appendChild(li);
    olList.appendChild(image);
}




