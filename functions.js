"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Name function
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
function voidAdd(num1) {
    num1;
}
console.log(add(2, 3)); // 5
console.log(add(2, 3, 5)); // 10
// Arrow function
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3; // num3: required parameter
console.log(sub(2, 3)); // -11
console.log(sub(2, 3, 5)); // -6
// Function expression
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(3, 5)); // 15
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [5, 6, 7];
console.log(add2(2, 3, ...numbers));
// Generic function
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c"]);
//# sourceMappingURL=functions.js.map