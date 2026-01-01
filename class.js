"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_name;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    // Constructor
    constructor(id, name, adress) {
        _Employee_name.set(this, void 0); // Private: Sintaxis nativa
        this.id = id;
        __classPrivateFieldSet(this, _Employee_name, name, "f");
        this.adress = adress;
    }
    login() {
        return { name: "Matias", age: 20, id: 1, email: "matute@gmail.com" };
    }
    // Methods
    getNameWithAdress() {
        // return this.name + " " + this.adress; 
        return `${__classPrivateFieldGet(this, _Employee_name, "f")} vive en ${this.adress}`; // Template Literal
    }
    // Static Members
    static getEmployeeCount() {
        return 50;
    }
    // Getters and Setters
    get empId() {
        return this.id;
    }
    set empId(id) {
        this.id = id;
    }
}
_Employee_name = new WeakMap();
class Manager extends Employee {
    constructor(id, name, adress) {
        super(id, name, adress);
    }
    getNameWithAdressAux() {
        return `Manager que vive en ${this.adress}`;
    }
}
// Usando interfaz Adress...
// let empJohn = new Employee(1, "John", {
//     street: "58",
//     city: "La Plata",
//     state: "LP",
//     pin: "1900"
// });
// let empJuan = new Manager(2, "Juan", {
//     street: "58",
//     city: "La Plata",
//     state: "LP",
//     pin: "1900"
// });
let empJohn = new Employee(1, "John", "58 1444");
let empJuan = new Manager(2, "Juan", "111 222");
console.log(empJohn); // Employee { id: 1, name: 'John', adress: '58 1444' }
console.log(empJohn.getNameWithAdress()); // John 58 1444 | John vive en 58 1444
console.log(empJuan.getNameWithAdressAux()); // Manager que vive en 111 222
console.log(empJuan.getNameWithAdress()); // Juan vive en 111 222
console.log(Employee.getEmployeeCount()); // 50
console.log(empJohn.empId); // 1
empJohn.empId = 1000;
console.log(empJohn.empId); // 1000
//# sourceMappingURL=class.js.map