var count = document.querySelector(".count");
var plus = document.querySelector(".plus");
var sub = document.querySelector(".sub");

var num = 0;
plus.addEventListener("click", function () {
  num = num + 1;
  count.innerText = num;
});

sub.addEventListener("click", function () {
  num = num - 1;
  if (num >= 0) {
    count.innerText = num;
  }
});
