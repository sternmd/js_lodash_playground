// Create a function that draws a rectangle on a canvas element.
// This function should accept arguments for height, width, and colour.
// Return a successfully draw rectangle using Canvas.

function rectangle() {
  var canvas  = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  context.beginPath();
  context.rect(188, 50, 200, 100);
  context.fillStyle = 'yellow';
  context.fill();
  context.lineWidth = 7;
  context.strokeStyle = 'black';
  context.stroke();
}
