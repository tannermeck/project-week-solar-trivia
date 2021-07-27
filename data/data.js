const sun = {
    id: 1,
    title: 'The Sun',
    question: `How many Earths fit inside the sun?`,
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
        answer: '100',
    }, {
        id: 2,
        answer: '243',
    }, {
        id: 3,
        answer: '325'
    }, {
        id: 4,
        answer: '187'
    }]
};

const planets = [
    sun, 
    mercury,
    venus
];

export default planets;