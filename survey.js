const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const q0 = 'What\'s your name? Nicknames are also acceptable :)';
const q1 = 'What\'s an activity you like doing?';
const q2 = 'What do you listen to while doing that?';
const q3 = 'Which meal is your favourite (eg: dinner, brunch, etc.)';
const q4 = 'What\'s your favourite thing to eat for that meal?';
const q5 = 'Which board game is your favourite?';
const q6 = 'What is your superpower? In a few words, tell us what you are amazing at!';

const arr = [q0, q1, q2, q3, q4, q5, q6];
let res = [];
const askQ = i => {
  if (i < arr.length) {
    rl.question(arr[i], (answer) => {
      res.push(answer);
      askQ(i + 1);
    });
  } else {
      console.log(`${res[0]} loves listening to ${res[1]} while ${res[2]}, devouring ${res[3]} for ${res[4]} prefers ${res[5]} over any other board game, and is amazing at ${res[6]}.`);
      rl.close();
  }
};
askQ(0);

