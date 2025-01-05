const divs = document.querySelectorAll(".div_1");

divs.forEach((div) => {
  var img = div.querySelector("img");
  var btn = div.querySelector(".close-btn");

  img.addEventListener("click",  () => {
    img.classList.add("scale");
    btn.style.display = "block";
  });

  btn.addEventListener("click", () => {
    img.classList.remove("scale");
    btn.style.display = "none";
  })
});

// Select all div_1 containers
// const divs = document.querySelectorAll(".div_1");

// divs.forEach((div) => {
//   const img = div.querySelector("img");
//   const btn = div.querySelector(".close-btn");

//   img.addEventListener("click", () => {
//     img.classList.add("scale");
//     btn.style.display = "block";
//   });

//   btn.addEventListener("click", () => {
//     img.classList.remove("scale");
//     btn.style.display = "none";
//   });
// });
