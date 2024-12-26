//Activity 1 task 1

let book = {
    title :'30_DaysJavascript',
    author : 'Hitesh',
    year : '2023',

    getDetailsYear: function(year){
        this.year = year;
        return 'title is ' + this.title + ' and author is ' + this.author + ' and year is ' + this.year;
    },

    getDetails: function(){
        return 'The book title is '+ this.title + ' & the author is ' + this.author;
    }
 }

console.log(book) ;
// console.log(typeof(book))

//task 2
console.log('Title is ', book.title);
console.log('The author is ', book.author);

//Activity 2 Object Methods
//task 3
console.log(book.getDetails());

//task 4
console.log(book.getDetailsYear("2024"));

//Activity 3 Nested Objects
//task 5

let library = {
    name : 'ABC library',
    book : [{
        title : 'js',
        author : 'sam',
        year: '2020',
    }, {
        title : 'python',
        author : 'jeoun',
        year: '2009',
    }]
}

console.log(library);

//task 6
console.log(library.name);
console.log(library.book[0].title);
console.log(library.book[1].title);

// Activity 4 this keyword
// Task 7

let books = {
    title : 'js world',
    year : '2024',

    getDetails1 :function(){
        return "title is "+ this.title + " and year is "+this.year;
    }
}
console.log(books.getDetails1());


//Activity 5 Object Iteration
//Task 8

let Book = {
    title: "JS",
    author: "Jun",
    year: "2020",
};

for (let keys in Book){
    let values = Book[keys];
    console.log(keys+" : "+ values);
}


//Task 9
console.log(Object.keys(Book) )
console.log(Object.values(Book))