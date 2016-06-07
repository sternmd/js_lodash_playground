// Using the Object you created for #3....
// Research the Object method that lists all of the keys in an Object. Use it to create an array.
// Loop through this array using a for (not a for-in) loop.
// console.log the keys.

var laptop = {
  screenSize      : 17,
  mouseOrTouchpad : "Touchpad",
  memory          : "8GB DDR3",
  os              : "El Capitan",
  processor       : "Intel Core i7"
};

console.log(Object.keys(laptop)); //
// console: ["screenSize", "mouseOrTouchpad", "memory", "os", "processor"]
