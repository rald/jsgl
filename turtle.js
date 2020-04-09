function Turtle(x, y) {
  this.x = x;
  this.y = y;
  this.heading = 270;

  this.move = function(distance) {
    var nx = this.x + Math.cos(rad(this.heading)) * distance;
    var ny = this.y + Math.sin(rad(this.heading)) * distance;
    drawLine(this.x, this.y, nx, ny);
    this.x = nx;
    this.y = ny;
  }

  this.turn = function(angle) {
    this.heading += angle;
  }

  this.jump = function(x, y) {
    this.x = x;
    this.y = y;
  }

}

function rad(deg) {
  return deg * Math.PI / 180;
}
