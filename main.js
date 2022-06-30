canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

mouseEvent= "empty";
var last_position_x, last_postion_y;

color= "red";
width_of_line= 1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) 
{
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
   current_position_mouse_x= e.clientX-canvas.offsetLeft;
   current_position_mouse_y= e.clientY-canvas.offsetTop;  
   
   if (mouseEvent=="mouseDown")
   {
       ctx.beginPath();
       ctx.strokeStyle= color;
       ctx.lineWidth= width_of_line;

       console.log("last position of x and y coordinates=");
       console.log("x= "+ last_position_x+" y= "+last_postion_y);
       ctx.moveTo(last_position_x, last_postion_y);


       console.log("current position of x and y coordinates=");
       console.log("x= "+ current_position_mouse_x+" y= "+current_position_mouse_y);
       ctx.lineTo(current_position_mouse_x, current_position_mouse_y);
       
       ctx.stroke();
   }
   last_position_x=current_position_mouse_x;
   last_postion_y=current_position_mouse_y;
}
