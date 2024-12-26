//Activity 1 task 1
function evenOrOdd(n){
    if(n % 2 ==  0) {
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(evenOrOdd(5));

// task 2
function squareOfaNumber(number){
    if (number < 0) {
        return "Invalid Input. Please enter a non-negative number.";
    }
    return number * number;
}
console.log(squareOfaNumber(5));


//Activity 1 task 3
function maxOfTwo(a,b){
    return Math.max(a,b);
}

console.log(maxOfTwo(3,4));


//task 4
function concatinateTheString(str_1, str_2){

    return (str_1+" "+str_2);

}

console.log(concatinateTheString("pallavi Bhasme","Preveen Kumar"));


//Activity 3 task 5
const sumOfTwoNumbersUsingArrowFunction = (num1, num2) => {
    if(num1 < 0 || num2 < 0){
        return "Invalid Input. Please enter non-negative numbers.";
    }
    return num1 + num2;
}

console.log(sumOfTwoNumbersUsingArrowFunction(5, 20));

// task  6
const checkContainSpecificCharacter = (str, char) => {

    return str.includes(char);
}

console.log(checkContainSpecificCharacter("Hello", "o")); //true

console.log(checkContainSpecificCharacter("world", "P")); //false

// Activity 4 task 7
const productOfTwo = (num1, num2 = 5) => {
    return num1 * num2;
}

console.log(productOfTwo(2, 10));
console.log(productOfTwo(5));


const acceptPersonNameAndGreetThem = (name, age = 22) => {
    if(typeof name !== 'string' || name.trim() === ''){
        return "Invalid input. Please enter a non-empty string for name.";
    }
    if (typeof age !== 'number' || age < 0) {
        return "Invalid input. Please enter a non-negative number for age.";
    }

    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(acceptPersonNameAndGreetThem('Pallavi', 22)); //Hello, Pallavi! You are 22 years old.
console.log(acceptPersonNameAndGreetThem('Jeoun', 27)); //Hello, Jeoun! You are 27 years old.
console.log(acceptPersonNameAndGreetThem('Sam')); //Hello, Sam! You are 22 years old.



