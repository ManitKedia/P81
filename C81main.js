canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

color = "aqua";

ctx.beginPath();

ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(400, 200, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListner("mousedown", my_mousedown);
