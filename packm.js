var arr=[["./PacMan1.png","./PacMan2.png"],["./PacMan3.png","./PacMan4"]]
var position=0;
var focus=0;
var getArray=["./PacMan1.png","./PacMan2.png"];
function run(){
    let img=document.getElementById("pacman");
    focus=(focus+1)%2;
    img.src=arr[direction][focus];
    position=position+20;
    pacman.style.left=positionx+"px";
}
setInterval(run,200);

var velocityx=15;
var velocityy=10;
var positionx=0;
var positiony=0;
var maxX=1200;
var minX=0;
var direction=0;

function ruthresh(){
    if(direction){
        positionx=positionx-velocityx;
        pacman.style.left=positionx+"px";
        if(positionx<=minX)
        direction=0;
    }
        else{
            positionx=positionx+velocityx;
            pacman.style.left=positionx+"px";
            if(positionx>=maxX)
            direction=1;
        }
    }
setInterval(ruthresh,50);

