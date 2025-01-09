var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}


function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 96; i++) {
    var no = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${no}</div>`;
  }
  // Math.floor(Math.random() * 10)
  document.querySelector("#pbtm").innerHTML = clutter;
}

// var timer = 60;
function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1>Game over! Your Score is ${score}</>`;
    }
  }, 1000);
}


document.querySelector('#pbtm').
addEventListener('click', function(e){
  console.log(e.target.textContent);
  var clickedNumber = Number(e.target.textContent);
  if(hitrn === clickedNumber){
    console.log("yes")
    increaseScore();
    makeBubble();
    getNewHit();
    
  }
})

runTimer();
makeBubble();
getNewHit();

