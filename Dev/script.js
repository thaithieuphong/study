var Canvas = document.getElementById("Canvas");
Canvas.width = 300;
Canvas.height = 300;

var ctx = Canvas.getContext("2d");

function drawLine(ctx, startX, startY, endX, endY){
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}