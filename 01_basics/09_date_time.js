let myDate = new Date();

// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(typeof myDate);

// let createdDate = new Date(2024, 9, 18, 6, 40);
let createdDate = new Date("01-01-2024");
// console.log(createdDate);
// console.log(createdDate.toDateString());
// console.log(createdDate.getUTCHours());
// console.log(createdDate.toLocaleString());


let timeStamp = Date.now();

// console.log(timeStamp);

// console.log(Math.floor(Date.now() / 1000));

// myDate.toLocaleString('default', {
//     calendar: createdDate
// })

// console.log(myDate);

const start = Date.now();

console.log(`Time elapsed: ${Date.now() - start} ms`);

