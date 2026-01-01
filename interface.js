"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Object Destructuring
let { name: userName, email: userEmail } = { name: "Matias", age: 20, id: 1, email: "matute@gmail.com" };
// Acceder a propiedades
// user.name;
// user.email;
userName;
userEmail;
let emp = { name: "Matute", id: 1, email: "matute@outlook.com", salary: 1000 };
// Array Destructuring
let [user1, user2, ...restUsers] = [{
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
];
console.log(user1); // { name: 'Matias', age: 20, id: 1, email: 'matute@gmail.com' }
console.log(user2); // { name: 'Juan', age: 20, id: 2, email: 'juan@gmail.com' }
console.log(restUsers); // []
let result = restUsers.filter(user => user.id > 1);
console.log(result);
//# sourceMappingURL=interface.js.map