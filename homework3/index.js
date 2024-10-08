"use strict"

// task 1
const user = {};
let name = prompt("Enter name"),
    age = +prompt("Enter age"),
    gender = prompt("Are you male or female?");

user.name = name;
user.age = age;
user.gender = gender;
console.log(user)

// //task2
let num = +prompt("Enter a number");
if(num % 2 == 0) {
    alert(num + " is even");
} else {
    alert(num + " is odd");
}

//conditions
let a = +prompt('a?', '');

switch(a){
    case 0:
        alert(0)
        break;
    case 1:
        alert(1)
        break;
    case 2:
    case 3:
        alert("2, 3")
        break;
    default:
}

//loops
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);

let i = 0;
while(i < 3){
    alert(`number ${i}!`)
    i++;
}


