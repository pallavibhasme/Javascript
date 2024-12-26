//Activity 1 Selecting and manipulating elements
//Task 1
const heading = document.getElementById('characterControl');
if(heading != undefined){
    heading.innerText = "Hello, I'm the Thor";
}

//task 2
let characterElement = document.getElementsByClassName("characterElement");
if(characterElement.length > 0){
    characterElement[0].style.backgroundColor = 'red';
}

//Activity 2 
//atsk 3
let newDiv = document.createElement('div');
newDiv.setAttribute("id", "bookName");
newDiv.setAttribute("class", "bookNameStyle");
newDiv.append('JS in hindi');
document.body.appendChild(newDiv);

//task 4
let container = document.getElementById('book-ul');

let createLiOne = document.createElement('li');
createLiOne.append('Container Child 3');
let createLiTwo = document.createElement('li');
createLiTwo.append('Container Child 3');


container.appendChild(createLiOne);
container.appendChild(createLiTwo)

//Activity 3 Removing Elements
//Task 5

if(newDiv != undefined){
    newDiv.remove();
}

//task 6

let mainContainer = document.getElementById('mainContainer');
let removeChild = mainContainer.children.length;
mainContainer.children[removeChild - 1].remove(); //Container Child 2  is  got removed

//Activity 4 Task 7
let image = document.getElementById('image-control');
image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ebrwvgVW5Ks_oLfCbG8Httf3_9g-Ynl_Q&s';

//task 8
let Activity = document.getElementById('activity-4');
if( Activity != undefined){
    //adding
    // Activity.setAttribute('class', 'activity-4-task');
    Activity.classList.add('activity-4-task');

    //changing class
    Activity.classList.remove('activity-4-task')
}


// activity 5 Event Handling
// task 9
let button = document.getElementById('change-para');
button.addEventListener('click' , () => {
    button.innerText = 'Button Click';
})

//task 10

button.addEventListener('mouseover', () => {
    button.style.borderBlockColor = 'red';

})









