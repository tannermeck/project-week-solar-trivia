import { getLeaderboard, getUser, setLeaderboard } from '../storage-utils/storage-utils.js';

const olList = document.getElementById('high-scores');

const user = getUser();
let leaderboard = getLeaderboard();
leaderboard.push(user);
setLeaderboard(leaderboard);

leaderboard = leaderboard.sort(function(a, b){
    return b.score - a.score;
});

for (let leader of leaderboard){
    const li = document.createElement('li');
    const image = document.createElement('img');
    image.src = `../assets/${leader.race}.png`;
    li.textContent = `${leader.name} | ${leader.race} | ${leader.score}`;
    olList.appendChild(li);
    olList.appendChild(image);
}




