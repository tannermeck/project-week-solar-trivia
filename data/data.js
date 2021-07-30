const sun = {
    id: 1,
    title: 'Sun',
    question: `How many Earth's fit inside the sun?`,
    correct: 4,
    choices: [{
        id: 1,
        answer: '130,000',
    }, {
        id: 2,
        answer: '279,000',
    }, {
        id: 3,
        answer: '1,800,000'
    }, {
        id: 4,
        answer: '1,300,000'
    }]
};

const mercury = {
    id: 2,
    title: 'Mercury',
    question: `How many moons does Mercury have?`,
    correct: 2,
    choices: [{
        id: 1,
        answer: '5',
    }, {
        id: 2,
        answer: '0',
    }, {
        id: 3,
        answer: '3'
    }, {
        id: 4,
        answer: '7'
    }]
};

const venus = {
    id: 3,
    title: 'Venus',
    question: `One day on Venus is equal to how many Earth days?`,
    correct: 2,
    choices: [{
        id: 1,
        answer: '100 days',
    }, {
        id: 2,
        answer: '243 days',
    }, {
        id: 3,
        answer: '325 days'
    }, {
        id: 4,
        answer: '187 days'
    }]
};
const earth = {
    id: 4,
    title: 'Earth',
    question: `True or False? There are more Stars then grains of sand on Earth?`,
    correct: 1,
    choices: [{
        id: 1,
        answer: 'True',
    }, {
        id: 2,
        answer: 'False',
    }]
};
const mars = {
    id: 5,
    title: 'Mars',
    question: `Borealis Basin (the Grand Canyon of Mars) covers what percentage of the surface of Mars?`,
    correct: 1,
    choices: [{
        id: 1,
        answer: '40%',
    }, {
        id: 2,
        answer: '80%',
    }, {
        id: 3,
        answer: '15%'
    }, {
        id: 4,
        answer: '5%'
    }]
};
const jupiter = {
    id: 6,
    title: 'Jupiter',
    question: `Jupiter has a giant storm called "The great red spot" that has been raging for at least 150 Earth years and is ____ times wider than Earth itself?`,
    correct: 3,
    choices: [{
        id: 1,
        answer: '1',
    }, {
        id: 2,
        answer: '4',
    }, {
        id: 3,
        answer: '2'
    }, {
        id: 4,
        answer: '3'
    }]
};
const saturn = {
    id: 7,
    title: 'Saturn',
    question: `In 1610, which astronomer was the first to gaze at Saturn through a telescope?`,
    correct: 2,
    choices: [{
        id: 1,
        answer: 'Leonardo Davinci',
    }, {
        id: 2,
        answer: 'Galileo Galilei',
    }, {
        id: 3,
        answer: 'Sigmond Freud'
    }, {
        id: 4,
        answer: 'Raphael Donatello'
    }]
};
const uranus = {
    id: 8,
    title: 'Uranus',
    question: `True or False? Uranus is the coldest planet in our solar system?`,
    correct: 1,
    choices: [{
        id: 1,
        answer: 'True',
    }, {
        id: 2,
        answer: 'False',
    }]
};
const neptune = {
    id: 9,
    title: 'Neptune',
    question: `What windspeed does Neptune's solar system storm's move frozen clouds of methane across the planet?`,
    correct: 3,
    choices: [{
        id: 1,
        answer: '500 mph',
    }, {
        id: 2,
        answer: '125 mph',
    }, {
        id: 3,
        answer: '1200 mph'
    }, {
        id: 4,
        answer: '600mph'
    }]
};
const pluto = {
    id: 10,
    title: 'Pluto',
    question: `Why is Pluto not a planet anymore?`,
    correct: 1,
    choices: [{
        id: 1,
        answer: `Pluto is too close to other planets`,
    }, {
        id: 2,
        answer: 'Pluto is too small',
    }, {
        id: 3,
        answer: `Pluto doesn't recycle`,
    }, {
        id: 4,
        answer: 'Pluto is a moon'
    }]
};
const planets = [
    sun, 
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
    pluto
];

export default planets;