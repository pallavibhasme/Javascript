var timer = 60;

var score = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}


function getNewHit() {
  var run = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = run;
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
    }
  }, 1000);
}

runTimer();
makeBubble();
getNewHit();

