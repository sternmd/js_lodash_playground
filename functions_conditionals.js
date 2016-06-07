// Create a logical block that detects if a user is able to purchase alcohol.
// If so, console.log out that they may have a drink.
// Else, warn them via console.log to not break the law.

function drink(age) {
  if (age >= 21){
   console.log("You may have a drink.");
  }
  else console.log("You may not drink.");
};
