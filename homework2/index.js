"use strict"


//store

let name = "BookStore.kz";
let countOfEmploees = 4;
let isProfitable = true;
let closeYear = null;
const oppeningYear = 2024;
let contry = "Kazakhstan";
const owner = {};
owner.name = "Nuridin";
owner.age = 19;

const employee1 = {
    name: "John"
};

delete employee1.name;

// work with objs

const vehicle = {};
vehicle.brandName = "BMW";
vehicle.model = "X5";
vehicle.model = "M1";
delete vehicle.model;

//for ... in
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
};
let sum = 0;
for(name in salaries) {
    sum += salaries[name];
}
console.log(sum);

