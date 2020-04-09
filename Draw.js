var isDrawing = false;

var colors = [
  "black","white","red","orange","yellow","green","blue","indigo","violet"
];

var colorIndex=1;

function inRect(x0,y0,x1,y1,w,h) {
  return  x0>=x1 && x0<=x1+w &&
          y0>=y1 && y0<=y1+h;
}

function render() {
  
  var size = 32;
  
  setLineWidth(1);  
  setStroke("#ffffff");
  setFill("#000000");
  
  cx=(canvas.width-colors.length*size)/2;
  cy=4;
  
  fillRect(cx,cy,colors.length*size,size);
  drawRect(cx,cy,colors.length*size,size);
  
  for(var i=0;i<colors.length;i++) {
    var x=i*size+cx;
    var y=cy;
    setFill(colors[i]);
    fillRect(x+8,y+8,size-16,size-16);
    
    if(inRect(mouseX,mouseY,x,y,size,size)) {
      colorIndex=i;
    }
  }
  drawRect(colorIndex*size+cx+4,cy+4,size-8,size-8);
  
  if (isMouseDown) {
    if (isDrawing) {
      setStroke(colors[colorIndex]);
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