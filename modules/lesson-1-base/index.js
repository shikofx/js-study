// const firstModule = require('./modules-01-exports');
// console.log(`The area of a circle of radius 4 is ${firstModule.area(4)}`);
// console.log(`The size of line of a circle of radius 6 is ${firstModule.circumference(6)}`);
// console.log(`id = ${firstModule.id}`);
// console.log(`name = ${firstModule.name}`);
// console.log(`first name = ${firstModule.firstN}`);
// console.log(`last name = ${firstModule.lastName}`);
// console.log(`full name = ${firstModule.fullName}`);
// console.log(`all data = ${firstModule.data}`);
// console.log(`all data = ${firstModule.data()}`);


const secondModule = require('./modules-02-module-exports');
console.log(`The area of a circle of radius 4 is ${secondModule.area(4)}`);
console.log(`The size of line of a circle of radius 6 is ${secondModule.circumference(6)}`);
console.log(`id = ${secondModule.id}`);
console.log(`name = ${secondModule.name}`);
console.log(`first name = ${secondModule.firstN}`);
console.log(`last name = ${secondModule.lastName}`);
console.log(`full name = ${secondModule.fullName}`);
console.log(`all data = ${secondModule.data}`);
console.log(`all data = ${secondModule.data()}`);

// const thirdModule = require('./modules-03-function-export');
// console.log(thirdModule.getMessage('Петр', 'Петрович'));
// console.log(`Сегодня ${thirdModule.date.getDate()}.${thirdModule.date.getMonth()}.${thirdModule.date.getFullYear()}`);
// console.log(`Сейчас ${thirdModule.date.getHours()}:${thirdModule.date.getMinutes()}:${thirdModule.date.getSeconds()}`);

// const User = require("./modules-04-function-constructurs");
 
// let peter = new User("Петя", 32);
// peter.sayHi();