// ************** Memory *****************

// Stack => all primitive data types use stack memory

// Heap => all non-primitive data types use heap memory


let name = "Muneeb"

let anotherName = name;

anotherName = "Hafiz"

// console.log(anotherName);

let userOne = {
    name: "Muneeb",
    email: "muneeb@gmail.com",
    age: 22
}
let userTwo = userOne

userTwo.email = "hafiz@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);