// Tell a funny story about how they leave each time. console.log is your friend here.

// Create an array of your friends.
var friends = ["Mando", "Tim", "Alex", "Aidan", "Anthony"];

// Now, create a loop that will pop a friend out every time the loop runs.
  for (var i = 0; i < friends.length; i++) {
    return friends[i].pop();
  }


  // 1. Basic for loop.
  for(var i = 0; i < friends.length; i++) {
      // ....
  }

  // 2. Using Array's join and split methods
  Array.apply(null, Array(5)).forEach(function(){
      // ...
  });

  // Lodash
  _.times(5, function(){
      // ...
  });
