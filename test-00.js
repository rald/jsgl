centerX = canvas.width / 2;
centerY = canvas.height / 2;

x=centerX;
y=centerY;
z=0;
zi=1;
frames=0;

function animate() {
  setFill("#00000010");
  fillRect(0,0,canvas.width,canvas.height);

  setFill("#ff0000");
  fillCircle(x,y,10);
  x=centerX+Math.sin(frames/10)*100;
  frames++;

  
  window.requestAnimationFrame(animate);
}

animate();