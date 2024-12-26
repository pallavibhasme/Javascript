
// -----------Light bulb---------
// let bulb = document.querySelector('#bulb');
// let btn = document.querySelector('#btn');

// let flag = 0;


// btn.addEventListener('click', function(){
//     console.log('clicked');
//     if(flag == 0){
//         bulb.style.backgroundColor = "white";
//         btn.innerHTML = "ON";
//         flag = 1;
//     }
//     else{
//         bulb.style.backgroundColor = "yellow";
//         btn.innerHTML = "OFF";
//         flag = 0;
//     }
    
// })-------------------------

// ------friend request sender-----

// let status_bar = document.querySelector("#status");
// let btn = document.querySelector('#btn');
// let flag = 0

// btn.addEventListener('click', function(){
//     if(flag == 0){
//         status_bar.innerHTML = "Friends <i class=ri-check-line></i>"
//         btn.innerHTML = "Remove";
//         flag = 1
//     }
//     else{
//         status_bar.innerHTML = "strenger";
//         btn.innerHTML = "Friends";
//         flag = 0
//     }
// })

// ---------------------------------

//--------Instagram Like oppstion-----------

let con = document.querySelector("#container");

let like = document.querySelector('i')

con.addEventListener('click', function(){
    // console.log('cliked');
    like.style.transform = `translate(-50%, -50%) scale(1)`;
    like.style.opacity = 0.8;
    
    setTimeout(function () {
      like.style.opacity = 0
    }, 1000);
    setTimeout(function () {
        like.style.transform = `translate(-50%, -50%) scale(0)`;
    
    }, 2000);
})










