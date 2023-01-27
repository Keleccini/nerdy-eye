// String/Text
var name = 'Khalil';

// Numbers
var age = 42;

// output
alert(name);
console.log(name);

/*
operators: these are characters, signs or symbols that define and/or show us the relationship between expressions in our code.

Types of operators: Arithmetic, Relational & Logical

Arithmetic
==========
1. Assignment : =
2. Equal to : ==, Exacty equal to : ===
3. +, -, *, /, %

Relational
==========
1. <, >, >=, >=

Logical
=======
1. AND &&
2. OR ||


 Conditional Statement
if(condition) {
    action;
}
*/

/*
if(age < 18) {
    console.log('Oops! you are underage, ' + name);
} else if(age > 18 && age < 25) {
    console.log('You are of age, ' + name);
} else if(age >= 30 && age < 50) {
    console.log('You are a middle-aged person, ' + name);
} else {
    console.log('It seems you do not fall under any age bracket, ' + name);
}

switch(age) {
    case 30:
        console.log('You are fully grown')
        break;
    case 17:
        console.log('You are underaged')
        break;
    default:
        console.log('It seems you do not fall under any age bracket');
}
*/

/* Functions(Methods): These are blocks of code that are used to carry out a certain task.
Types of Functions:
1. Custom functions
2. In-built functions

A function must have only one return keyword.
*/

/* Custom Function
function add(argument) {
    
}

function add(num1, num2) {
    var num1 = 5;
    var num2 = 10;
    var result = num1 + num2;

    return result;
}

console.log('The result is: ' + add(5, 10));

function add(num1, num2) {
    var result = num1 + num2;

    return result;
}

console.log('The result is: ' + add(5, 10));

function add(num1=5) {
    var num2 = 10;
    var result = num1 + num2;
    return result;
}

console.log('The result is: ' + add(10)); 

*/

// Arrays: Arrays allow us to store a series of related information together

// var car = 'ford';
// var cars = Array('ford', 'benz', 'honda', 'toyota', 'tesla');
// var cars = ['ford', 'benz', 'honda', 'toyota', 'tesla'];

// array position:

/*
console.log(cars);
console.log(cars[2]);
    cars[0] = 'lucid';
    cars.push = 'volvo';
    console.log(cars);
    console.log(cars.length);

// loops
// for loop

for(var i=0; i<cars.length; i++) {
    console.log('this car is ' + cars[i]);
}

// while loop
var i = 0;
while(i<cars.length) {
    console.log('this car is ' + cars[i]);
    i++;
}
*/

var cars = {brand:'ford', model:2015, color:['red', 'black', 'yellow']};

console.log(cars)
console.log(cars.brand)
console.log(cars.model)
console.log(cars.color)  