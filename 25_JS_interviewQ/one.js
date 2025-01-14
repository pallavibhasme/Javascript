// 1. Given a string , reverse each word in the sentance

var str = "Hello how are you";
var saveStr = str.split(" ").map(function (word) {
            return word.split("").reverse().join("");
            });

console.log(saveStr.join(" "))
// ans: olleH woh era uoy

// 2. how to check an object is array or not

function checkArray(elem){
    return  Array.isArray(elem);
}

console.log(checkArray([]))
console.log(checkArray({}));


// 3. How to empty an array in js
// do not reset it to new array do not loop thrpugh to poop each value











