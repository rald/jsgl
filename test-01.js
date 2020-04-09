var turtle = new Turtle(canvas.width / 2, canvas.height / 2);

function move(turtle, distance) {
  var sign = Math.sign(distance);

  function animation() {
    turtle.move(sign);
    distance -= sign;
    if(Math.abs(distance)>=1) setTimeout(animation,1000/60);
  }

  animation();
}

function turn(turtle, angle) {
  var sign = Math.sign(angle);

  function animation() {
    turtle.turn(sign);
    angle -= sign;
    if(Math.abs(angle)>=1) setTimeout(animation,1000/60);  
  }

  animation();
}

setStroke("#ffffff");

move(turtle, 100);
turn(turtle, 90);
move(turtle, 100);

main();