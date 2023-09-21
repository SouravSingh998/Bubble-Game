var clutter ="";
var timer=60;
var score=0;
var hitrn=0;
function makeBubble()
{
for(var i=1;i<=168;i++)
  { 
    var random = Math.floor(Math.random()*10)
    clutter +=` <div id="bubble">${random}</div>`; 
  }

  document.querySelector("#downPanel").innerHTML = clutter;
}
 
function runTimer(){
 var timeval= setInterval(function(){
   if(timer>0)
   { timer--;
      document.querySelector("#timerval").innerHTML=timer;
     }
     else
       {
        clearInterval(timeval);
        document.querySelector("#downPanel").innerHTML=`<h1>Game Over</h1>`;
       }
  },1000)
}
function getNewHit(){
  hitrn=Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent=hitrn;
}

function increaseScore(){
  score +=10;
  document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#downPanel").addEventListener("click",function(details){
   var clickedNum = Number(details.target.textContent);
   if(clickedNum===hitrn)
  {
    makeBubble();
    increaseScore();
    getNewHit();  
  }
  });
 makeBubble();
 runTimer();
 getNewHit();
 