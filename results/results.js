import { getLeaderboard, getUser, setUser, setLeaderboard } from '../storage-utils/storage-utils.js';

const olList = document.getElementById('high-scores');
const userScore = document.getElementById('user-score');

// I would maybe move the logic of adding the user to the 
// leaderboard, to the same place where you check if the
// user has completed all the questions

// I would also possibly allow users to view this page without
// going all the way through the quest

const user = getUser();

let leaderboard = getLeaderboard();

if (user) {
    leaderboard.push(user);
}

userScore.textContent = `${user.name.toUpperCase()}, Your score is ${user.score}0%`;

setUser(null);

setLeaderboard(leaderboard);


// if you move this into a function like renderLeaderBoard
// you could also render the leaderBoard on the homepage to 
// allow people to see what score they should shoot for

const sortedLeaderBoard = leaderboard.sort(function(a, b){
    return b.score - a.score;
});

const topTen = sortedLeaderBoard.slice(0, 9);

for (let leader of topTen){
    const li = document.createElement('li');
    const image = document.createElement('img');
    image.src = `../assets/${leader.race}.png`;
    li.textContent = `${leader.name.toUpperCase()} | ${leader.race.toUpperCase()} | ${leader.score}0%`;
    olList.appendChild(li);
    olList.appendChild(image);
}




