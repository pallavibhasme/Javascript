//Activity 1 
let name = 'Pallavi';
const age = '22';

// task 1
// console.log(`My name is ${name} and my age is ${age}`);
let string = `hello hi,
how are you?
how are you doing?`

// task 2
// console.log(string);

//Activity 2 Destructuring
//Task 3
let distractArray =  [1, 2, 3, 4, 5, 6];
let [first, second] = distractArray;
// console.log(first);
// console.log(second);

//task 4
let Book = {
    title: "JS",
    author: "Jun",
    year: "2020",
};

const {title, author, year} = Book;
// console.log(title);
// console.log(author);
// console.log(year);

 //Activity 3 Spread and Rest Operator
//  task 5
let firstArray = [1, 2, 3, 4, 5, 6];
let secondArray = [10, 20, 30, 40, 50];

let combineArray = [...firstArray, ...secondArray];
console.log(combineArray);

//task 6
function sum(...numbers){
    let totalsum = numbers.reduce((total, num) => {
        return total + num ;
    })
    return totalsum;
}


console.log('The Sum of numbers is : ', sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//Activity 4 Default parameter
//task 7

function productOfTwo(a, b = 1){
    return a*b;
}

console.log("Product of given numbers is ",productOfTwo(3,4));
console.log("Product of given numbers is ",productOfTwo(5));

//Activity 5 Enhanced Object Literals
// task 8

const firstName = 'john';
const lastName = 'Doe';

let person = {
    firstName,
    lastName,
    fullName(){
        return `${this.firstName} ${lastName}`;

    },
    greet(){
        console.log(`hello, my name is ${this.fullName()}`);
    }
};
console.log(person);
// console.log(person.fullName())
// console.log(person.greet());

//task 9
let title1 = "title";
let author1 = "author";
let year1 = "year";
let book2 = {
    [title1]: "Zero To Hero",
    [author1]: "Mat",
    [year1]: 2000
}
console.log(book2);










