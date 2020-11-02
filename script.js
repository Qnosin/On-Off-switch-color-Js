var click = document.getElementById('button');
var color = document.getElementById('body');
var x = 0;

function changeColor(){
    color.style.backgroundColor = "blue";
    x++;
    if(x==2){
        color.style.backgroundColor = "white";
        x=0;
    }

}

