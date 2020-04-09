var centerX=canvas.width/2;
var centerY=canvas.height/2;

var turtle=new Turtle(centerX,centerY);

setStroke("#ffffff");

function drawStar(size) {
  turtle.heading=0;
  for(var i=0;i<5;i++) {
    turtle.move(size);
    turtle.turn(144);
  }
}

function render() {
  var size = Math.floor(Math.random() * 50);

  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  setStroke("rgb(" + r + "," + g + "," + b + ")");

  setLineWidth(4);
  
  turtle.jump(
      Math.floor(Math.random() * canvas.width),
      Math.floor(Math.random() * canvas.height)
  );

  drawStar(size);
}

setInterval(render,1000/60);
