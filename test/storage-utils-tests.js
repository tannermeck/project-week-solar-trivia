import { incrementScore, setUser, getUser } from '../storage-utils/storage-utils.js';

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