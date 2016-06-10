// Selecting a random item from a list with native JS

var luckyDraw = ["Colin", "John", "James", "Lily", "Mary"];

function pickRandomPerson(luckyDraw){
    var index = Math.floor(Math.random() * (luckyDraw.length -1));
    return luckyDraw[index];
}

pickRandomPerson(luckyDraw); // John

// Using Lodash
_.sample(luckyDraw); // Colin

// Lodash - Getting 2 random item

var luckyDraw = ["Colin", "John", "James", "Lily", "Mary"];

_.sample(luckyDraw, 2); // ['John','Lily']


// Get a random number between 15 and 20.
// Naive utility method
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumber(15, 20);

// Lodash
_.random(15, 20);

_.random(20); // Return random number between 0 to 20
_.random(15, 20, true); // Return random floating numbers between 15 and 20
