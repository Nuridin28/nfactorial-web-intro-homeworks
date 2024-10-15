"use strict"
// 1
const ageTable = document.querySelector("#age-table");
console.log(ageTable);
// 2
const labels = document.querySelectorAll("label");
console.log(labels);
// 3
const firstTd = document.querySelector("td");
console.log(firstTd);
// 4
const form = document.querySelector("[name = search]");
console.log(form);
// 5
const inputs = form.querySelectorAll('input');
console.log(inputs[0]);
// 6
const lastInput = inputs[inputs.length - 1];
console.log(lastInput);
