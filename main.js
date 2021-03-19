canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "red";
var widthOfLine = 1;
var radius = 50;

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    currentPositionMouseX = e.clientX - canvas.offsetLeft;
    currentPositionMouseY = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle =  color;
        ctx.lineWidth = widthOfLine;
        ctx.arc(currentPositionMouseX, currentPositionMouseY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseevent = "mouseup";
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("lineWidth").value;
    radius = document.getElementById("radius").value;
    mouseevent = "mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseevent = "mouseleave";
}
