canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


color="green";
widthofline=5;

var mouseEvent="empty";
var lastPositionofX,lastPositionofY;


//codes for mouse down event//
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
 mouseEvent="mousedown";
 console.log("mousedown");   
}
//codes for mouse up//
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
    console.log("mouseup");
}
//codes for mouse leave//
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
    console.log("mouseleave");
}
//codes for mouse move//
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentPositionOfX=e.clientX-canvas.offsetLeft;
currentPositionOfY=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=widthofline;
ctx.arc(currentPositionOfX,currentPositionOfY,40,0,2*Math.PI);
ctx.stroke();
}
lastPositionofX=currentPositionOfX;
lastPositionofY=currentPositionOfY;
}