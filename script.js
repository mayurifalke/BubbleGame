function makeBubble() {
     var clutter = " ";

     for (var i = 0; i < 78; i++) {
          var rs = Math.floor(Math.random() * 10);    //for giving random decimal no.
          clutter += `<div class="bubble">${rs}</div>`;    //here we are use `` this insted of ('')single quotes  there is differece between them `` this directly evaluate the value, when we used single quotes then we have to + after the string
     }
     document.querySelector('.panelButtom').innerHTML = clutter;
}

var timer = 60;
var score = 0;
function runTimer() {
     var timerInt = setInterval(function () {
          if (timer > 0) {
               timer--;
               document.querySelector("#timerVal").innerHTML = timer;
          }

          else {
               clearInterval(timerInt)     //when timer = 0 then also setInterval function is executed then thus to save the memory  clearInterval() func is used 
               document.querySelector(".panelButtom").innerHTML = `<h1 id="heading">Game Over <br><span id="nheading">Your Score is:- ${score} </span> </h1>`;
          }
     }, 1000)
}

var rn = 0;
function getNewhit() {
     rn = Math.floor(Math.random() * 10)
     document.querySelector("#hitVal").innerHTML = rn;
}


function increaseScores() {
     score += 10;
     document.querySelector("#scoreVal").innerHTML = score
}


//Event Bubbling:- when we apply eventListener on an element if eventListener is not find on that then it will search to on parent if on parent is also not present then it will search on parent it's parent
//adding eventListener on panelButtom where all bubbles are present
var a = document.querySelector(".panelButtom")
a.addEventListener("click", function (data) {
     if (data.target.innerHTML == rn) {      //it is target to html element first then giveing it's value
          increaseScores();
          getNewhit();
          makeBubble();
     }
});

makeBubble();
runTimer();
getNewhit();
