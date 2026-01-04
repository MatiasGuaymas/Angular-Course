// String
let lname: string;

lname = "Guaymas";

let newname = lname.toUpperCase();

console.log(newname); // GUAYMAS

// lname = 10; -> Error

// Number
let age: number;

age = 20;
age = 20.5;

let result = parseInt("20"); // Type inference

// Boolean
let isValid: boolean;

// console.log(isValid); -> Error TS pero JS imprime undefined

let isNotValid: boolean = false;

console.log(isNotValid); // false

// Arrays
let empList: String[];

empList = ["Matias", "Juan"];

let emp = empList.find((emp) => emp == "Guaymas");

console.log(emp); // undefined

let numList: Array<number>; // Generics

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
const enum Color { // Const: Dev necesita solo una lista de colores, pero no debe ser conocido en producción
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;

// Tuples
let swapNumbs: [number, number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);

swapNumbs[0];
// swapNumbs[2]; -> Error

// any

let department: any; // Evitar tipo de dato any

department = "IT";
department = 5;
department = Array<number>;

let dep; // any

// void