import type { Login, User } from './interface';

interface Adress {
    street: string;
    city: string;
    state: string;
    pin: string;
}

class Employee implements Login {
    // Properties and Member Visilbility
    private id: number; // Private
    #name: String; // Private: Sintaxis nativa
    protected adress: String; // Protected

    // Constructor
    constructor(id: number, name: String, adress: String) {
        this.id = id;
        this.#name = name;
        this.adress = adress;
    }

    login(): User {
        return {name: "Matias", age: 20, id: 1, email: "matute@gmail.com"};
    }

    // Methods
    getNameWithAdress(): String {
        // return this.name + " " + this.adress; 
        return `${this.#name} vive en ${this.adress}`; // Template Literal
    }

    // Static Members
    static getEmployeeCount(): number {
        return 50;
    }

    // Getters and Setters
    get empId(): number {
        return this.id;
    }

    set empId(id: number) {
        this.id = id;
    }
}

class Manager extends Employee {
    constructor(id: number, name: String, adress: String) {
        super(id, name, adress);
    }

    getNameWithAdressAux(): String {
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