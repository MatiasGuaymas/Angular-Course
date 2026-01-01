export interface User {
    name: string;
    age?: number; // Optional
    id: number;
    email: string;
}

// Object Destructuring
let { name: userName, email: userEmail }: User = { name: "Matias", age: 20, id: 1, email: "matute@gmail.com" };

// Acceder a propiedades
// user.name;
// user.email;
userName;
userEmail;

interface Employee extends User { // implements solo se usa en clases, no en interfaces.
    salary: number;
}

let emp: Employee = { name: "Matute", id: 1, email: "matute@outlook.com", salary: 1000 };
// let emp : Employee = {name: "Matute", id: 1, email: "matute@outlook.com"}; -> Error

export interface Login {
    login(): User; // Sin comportamiento
}

// Array Destructuring
let [user1, user2, ...restUsers] : User[] = [{
    name: "Matias",
    age: 20,
    id: 1,
    email: "matute@gmail.com"
},
{
    name: "Juan",
    age: 20,
    id: 2,
    email: "juan@gmail.com"
}
]

console.log(user1); // { name: 'Matias', age: 20, id: 1, email: 'matute@gmail.com' }
console.log(user2); // { name: 'Juan', age: 20, id: 2, email: 'juan@gmail.com' }
console.log(restUsers); // []

// let result = restUsers.filter(user => user.id > 1);