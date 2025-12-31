// Name function
function add(num1: number, num2: number, num3?: number): number { // num3: optional parameter
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

function voidAdd(num1: number) { // void
    num1;
}

console.log(add(2, 3)); // 5

console.log(add(2, 3, 5)); // 10

// Arrow function
const sub = (num1: number, num2: number, num3 = 10): number => num1 - num2 - num3; // num3: required parameter

console.log(sub(2, 3)); // -11

console.log(sub(2, 3, 5)); // -6

// Function expression
const mult = function (num1: number, num2: number): number {
    return num1 * num2;
};

console.log(mult(3, 5)); // 15

function add2(num1: number, num2: number, ...num3: number[]): number { // ... rest operator | num3: rest parameter
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [5, 6, 7];

console.log(add2(2, 3, ...numbers));

