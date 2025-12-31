"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// String
let lname;
lname = "Guaymas";
let newname = lname.toUpperCase();
console.log(newname); // GUAYMAS
// lname = 10; -> Error
// Number
let age;
age = 20;
age = 20.5;
let result = parseInt("20"); // Type inference
// Boolean
let isValid;
// console.log(isValid); -> Error TS pero JS imprime undefined
let isNotValid = false;
console.log(isNotValid); // false
// Arrays
let empList;
empList = ["Matias", "Juan"];
let emp = empList.find((emp) => emp == "Guaymas");
console.log(emp); // undefined
let numList; // Generics
numList = [1, 2, 3, 4];
let newNum = numList[4];
let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(newNum); // undefined
console.log(results); // [3, 4]
console.log(num); // 2
console.log(sum); // 10
// Enum 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Blue;
// Tuples
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
// swapNumbs[2]; -> Error
// any
let department; // Evitar tipo de dato any
department = "IT";
department = 5;
department = (Array);
let dep; // any
// void
//# sourceMappingURL=datatypes.js.map