// Activity 1 
const Array = [1, 2, 3, 4, 5];

// task 1
console.log(Array);

//task 2
console.log("First ele of an array", Array[0]);
console.log("last ele of an array", Array[Array.length - 1]);


// Activity 2 task 3
Array.push(6);
console.log(Array)  //  [ 1, 2, 3, 4, 5, 6 ]

// task 4
Array.pop(6);
console.log(Array)   //  [ 1, 2, 3, 4, 5 ]


// task 5
Array.shift();
console.log(Array)  //  [ 2, 3, 4, 5 ]

// task 6
Array.unshift(1);
console.log(Array)  //  [1, 2, 3, 4, 5 ]


//Activity 3 task 7

const arr = [1, 2, 3, 4, 5];

const arrayContainingDoubles = arr.map(number => number * 2);

console.log(arrayContainingDoubles);

//task 8

const array = [1, 2, 3, 4, 5, 6, 7, 8 , 0];

const arrayContainingFilter = array.filter(number => number % 2 === 0);

console.log(arrayContainingFilter);

//task 9

const num = [1, 2, 3, 4, 5];

const sumOfArray = num.reduce((a,b) => a + b, 0 );

console.log("Sum of array elements:",sumOfArray);


//task 10
const array10 = [1, 2, 3, 4, 5];
for(let i = 0; i < array10.length; i++){
    console.log(array10[i]);
}

//Task 11
console.log('ForEach loop array elements are as follows :  ');
const arrayForEach = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrayForEach.forEach(element => {
    console.log(element);
});







