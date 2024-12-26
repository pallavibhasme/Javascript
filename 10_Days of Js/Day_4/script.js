// activity 1 task 1
function printNumbers(n){
    for(let i=1; i<=n; i++){
        // console.log(i);
    }
}
printNumbers(10);

//task 2
for(let i = 1; i<=10; i++){
    // console.log("5 *", i ,"=",5 * i);
} 

// activity 2 task 1
let n  = 1
let sum = 0
while(n <= 10){
    sum += n;
    n++;
}
// console.log(sum);


// activity 2 task 2
let number = 10
while(number > 0){
    // console.log(number);
    number--;
}

// activity 4 task 1
function printPattern(num){
    for(let i=1; i<=num; i++){
        for(let j=1; j<=i; j++){
        //     process.stdout.write("* " );
        }
        // console.log("")
    }
}
printPattern(5)



// activity 5 task 1
function printnum(num){
    for(let i=1; i<=10; i++){
        if(i == 5){
            continue;
        }
        else{
            // console.log(i);
        }
    }
}
printnum(10)


// activity 5 task 2
function printnumbreak(num){
    for(let i=1; i<=10; i++){
        if(i == 7){
            break;
        }
        else{
            console.log(i);
        }
    }
}
printnumbreak(10)



