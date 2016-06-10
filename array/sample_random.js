// Selecting a random item from a list with JS

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
