var isDrawing = false;
function render() {
  if (isMouseDown) {
    if (isDrawing) {
      setStroke("#ffffff");
      setLineWidth(4);
      drawLine(prevX, prevY, mouseX, mouseY);
      prevX = mouseX;
      prevY = mouseY;
    } else {
      isDrawing = true;
      prevX = mouseX;
      prevY = mouseY;
    }
  } else {
    isDrawing = false;
  }
}

setInterval(render, 1000 / 60);