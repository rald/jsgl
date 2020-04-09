var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

function spiral(size,angle,incr) {
  var dist=0;
  for (var i = 0; i < size; i++) {
    turtle.move(dist);
    turtle.turn(angle);
    dist+=incr;
  }
}

var turtle = new Turtle(centerX, centerY);

setLineWidth(4);
setStroke("green");

spiral(50,175,5);