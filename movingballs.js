var ball1 = document.getElementById('ball-1');
var ball2 = document.getElementById('ball-2');
var ball3 = document.getElementById('ball-3');
var velocity1 = 20;
var velocity2 = 50;
var positionX1 = 0;
var positionX2 = 0;
var positionY1 = 0;
var positionY2 = 0;
var Xmin = 0;
var Xmax = 600;
var Ymin = 0;
var Ymax = 500;
var reverseX1 = true;
var reverseY1 = true;
var reverseX2 = true;
var reverseY2 = true;

//Function that move the ball from left to right and backward
function leftRight(){
  if(reverseX1){
    positionX1 += velocity1;
    ball1.style.left = positionX1 + 'px';
    ball1.style.background = "orange";
  }else{
    positionX1 -= velocity1;
    ball1.style.left = positionX1 + 'px';    
    ball1.style.background = "red";
  }
  if(positionX1 > Xmax || positionX1 === Xmin){
    reverseX1 = !reverseX1;
  }
}


//Function that move the ball around
function moveBall() {
  if(reverseX2){
    positionX2 += velocity2;
    ball2.style.left = positionX2 + 'px';
    ball2.style.background = "greenyellow";
  }else{
    positionX2 -= velocity2;
    ball2.style.left = positionX2 + 'px';    
  }

  if(reverseY2){
    positionY2 += velocity2;
    ball2.style.top = positionY2 + 'px';
    ball2.style.background = "purple";
  }else{
    positionY2 -= velocity2;
    ball2.style.top = positionY2 + 'px';
  }

  if(positionX2 > Xmax || positionX2 === Xmin){
    reverseX2 = !reverseX2;
    ball2.style.background = "orange";
  }

  if(positionY2 > Ymax || positionY2 === Ymin){
    reverseY2 = !reverseY2;
    ball2.style.background = "yellow";
  }
}

//Call the moveBall function every 100ms
setInterval(moveBall, 100);

//Call the leftRight function every 50ms
setInterval(leftRight, 50);

//Call the topBottom function every 45ms
setInterval(topBottom, 45);