"use strict"
//task1
const checkAge = (age) => (age > 18) ? true : confirm("Родители разрешили?");
console.log(checkAge(19));

//task2
function pow(x, n){
    let res = 1;
    for(let i = 0; i < n; i++){
        res *= x;
    }
    return res;
}
console.log(pow(3,2))

//task3
// const ask = (question, yes, no) => {
//     if(confirm(question)) yes()
//     else no()
// }
const ask = (question, yes, no) => (confirm(question)) ? yes() : no();
ask(
    'Вы согласны?',
    function() { alert("Вы согласились.");},
    function() { alert("Вы отменили выполнение.");}
);

//task4
let arr = [5, 2, 1, -10, 8];
arr.sort((a,b) => b-a);
alert(arr);

//task5
let vasya = {name:"Вася", age:25};
let petya = {name:"Петя", age:30};
let masha = {name:"Маша", age:28};
let users = [vasya, petya, masha];
let names = users.map((item)=>item.name);
alert(names);

//task6
let vasya2 = {name:"Вася", surname:"Пупкин", id:1};
let petya2 = {name:"Петя", surname:"Иванов", id:2};
let masha2 = {name:"Маша", surname:"Петрова", id:3};

let users2 = [vasya2, petya2, masha2];

let usersMapped = users2.map((item) => {
    const obj = {
        fullname:item.name + " " + item.surname,
        id:item.id
    }
    return obj;
});
alert(usersMapped[0].id);
alert(usersMapped[0].fullname);

//task7

const getAverageAge = (users) => {
    let sum = 0;
    let c = 0;
    users.forEach(element => {
        sum += element.age;
        c++;
    });
    return sum / c;
}
let vasya3 = {name:"Вася", age:25};
let petya3 = {name:"Петя", age:30};
let masha3 = {name:"Маша", age:29};

let arr3 = [vasya3, petya3, masha3];
console.log(getAverageAge(arr3))