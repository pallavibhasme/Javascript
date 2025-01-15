// 1. Given a string , reverse each word in the sentance

var str = "Hello how are you";
var saveStr = str.split(" ").map(function (word) {
  return word.split("").reverse().join("");
});

console.log(saveStr.join(" "));
// ans: olleH woh era uoy

// 2. how to check an object is array or not

function checkArray(elem) {
  return Array.isArray(elem);
}

console.log(checkArray([]));
console.log(checkArray({}));

// 3. How to empty an array in js
// do not reset it to new array do not loop thrpugh to poop each value

var arr = [1, 2, 3, 4, 5];
arr.length = 0;

// 4. how to check if a number is integar?

var a = 12;
// Number.isInteger(1) --- other way to find out
if (a % 1 === 0) {
  console.log("Inetger");
} else {
  console.log("not");
}

// Function-------------------
// 5. make this work: duplicate([1,2,3,4,5]) -->  [1,2,3,4,5,1,2,3,4,5]

function duplicate(a) {
  return a.concat(a);
}
var Arr_1 = duplicate([1, 2, 3, 4, 5]);
console.log(Arr_1);

//6. js fun to reverse number
function reversed(n) {
  var lastno = 0;
  while (n > 0) {
    var digit = n % 10;
    lastno = lastno * 10 + digit;
    n = Math.floor(n / 10);
  }
  return lastno;
}
var rev = reversed(123);
console.log(rev);

//  7. string palindrom checker

function stringPalindrom(str) {
  var a = str.split("").reverse().join("");
  return a === str;
}
console.log(stringPalindrom("poop"));
console.log(stringPalindrom("pool"));

// 8. sort the string -- apple --> aelpp
function alphabetically(str) {
  var a = str.split("").sort().join("");
  console.log(a);
}
alphabetically("apple");

// 9. js fun that accepts string as paramp and
// convert the first letter of each word in string to uppercase

function upperCase(str) {
  var allword = str.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  return allword.join(" ");
}
console.log(upperCase("hello pallavi"));

// 10. number of Occurrence of letter in string
// hasownproperty
function numberofOccurrence(str) {
  var Occurrence = {};
  str.split("").forEach(function (elem) {
    if (Occurrence.hasOwnProperty(elem) === false) {
      Occurrence[elem] = 1;
    } else {
      Occurrence[elem]++;
    }
  });
  console.log(Occurrence);
}

numberofOccurrence("pallavi");

// 11. arry sum

var arr = [1, 2, 3, 4, 5, 6];
var sum = 0;

arr.forEach(function (elem) {
  sum = sum + elem;
});
console.log(sum);

//12.  in an arry of no and strings add only no

var arrNumStr = ['hehheh', 13, 'jk', 7, 'abc', 12, 21];
var sum = 0;

arrNumStr.forEach(function(elem) {
    if(typeof(elem) === 'number'){
        sum += elem
    }
})

console.log("number sum is in an array ",sum)






















