// Create an Object that represents a laptop. Give it 3-5 attributes.
var laptop = {
  screenSize      : 17,
  mouseOrTouchpad : "Touchpad",
  memory          : "8GB DDR3",
  os              : "El Capitan",
  processor       : "Intel Core i7"
};


// Give it one ability that tells the world about itself (similar to a to_s in Ruby)
var ret = 'My laptop screen size is ' + laptop.screenSize + ' and has ' + laptop.mouseOrTouchpad + ' with memory of ' + laptop.memory + ' and OS of ' + laptop.os + ' and the processor is' + laptop.processor;
