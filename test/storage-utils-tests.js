import { incrementScore, setUser, getUser } from '../storage-utils/storage-utils.js';
import { createUser } from '../data/create-user.js';

const test = QUnit.test;

test('test whether the score is incremented by 1 when incrementScore is called', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const user = {
        name: 'tanner',
        race: 'alien',
        score: 0,
    };
    setUser(user);

    incrementScore();
    const actual = getUser();
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = {
        name: 'tanner',
        race: 'alien',
        score: 1,
    };

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('Tests for GetUser function', (expect) => {

    const user = {
        name: 'tanner',
        race: 'alien',
        score: 0,
        completed: []
    };
    setUser(user);

    const actual = getUser();

    const expected = {
        name: 'tanner',
        race: 'alien',
        score: 0,
        completed: []
    };

    expect.deepEqual(actual, expected);
});

test('Tests for createUser function', (expect) => {
    
    const fakeForm = new FormData();

    fakeForm.set('name', 'tanner');
    fakeForm.set('race', 'alien');

    const actual = createUser(fakeForm);

    const expected = {
        name: 'tanner',
        race: 'alien',
        score: 0,
        completed: []
    };

    expect.deepEqual(actual, expected);
});