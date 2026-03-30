// variables

// what are variables?
// Ans: variables are containers for storing data values

// how to declare a variable?
// Ans: we can declare a variable using keyword var,let and const

// there are two things in variable declaration one is declaration and another is initialization

// declaration: when we create a variable and give it a name this part is called declaration

//initialization: when we assign the value to the variable this part is called initialization

//example

var name;// declaration

name = "Nafi" // initialization

// we can also declare and initialize a variable in one line

var age = 24 //declaration and initialization in one line

//problems with var

// 1. var is function scoped
// 2. var can be re-declared and updated
// 3. var does not support block scope

// fuction scope: when we declare a variable inside a function it is only accessible within that function but var is function scoped which means if we declare a variable inside a function it is accessible outside the function as well cause the code of whole javascript file is considered as a function.

// example::
function myFunction() {
    var x = 10; // x is only accessible within this function
    console.log(x); // Output: 10
}
console.log(x); // Output: 10 (x is accessible outside the function as well) ❌

// re-declaration and updating: we can re-declare and update a variable declared with var which can lead to unexpected behavior in our code

// example::
var name = "Nafi";
console.log(name); // Output: Nafi
var name = "John"; // re-declaring the variable
console.log(name); // Output: John (the value of name is updated to John) ❌


// block scope: when we declare a variable inside a block it is only accessible within that block but var does not support block scope which means if we declare a variable inside a block it is accessible outside the block as well  

example:
if (true) {
    var x = 10; // x is only accessible within this block
    console.log(x); // Output: 10
}
console.log(x); // Output: 10 (x is accessible outside the block as well) ❌

// to solve these problems we can use let and const instead of var 💡
// ----------------------------------------------------------------------------------------------
// let (block scope, can be updated but not re-declared)

// example::

// updating ✅
let name = "Nafi";
console.log(name); // Output: Nafi
name = "John"; // updating the variable
console.log(name); // Output: John (the value of name is updated to John) ✅

// re-declaration ❌
let name = "Nafi";
let name = "John"; // This will cause a SyntaxError

//block scope ✅
if (true) {
    let x = 10; // x is only accessible within this block
    console.log(x); // Output: 10
}
console.log(x); // Output: ReferenceError: x is not defined ❌
// ----------------------------------------------------------------------------------------------

// const (block scope, cannot be updated and re-declared)

// example::

// updating ❌
const name = "Nafi";
console.log(name); // Output: Nafi
name = "John"; // This will cause a TypeError: Assignment to constant variable. ❌

// re-declaration ❌
const name = "Nafi";
const name = "John"; // This will cause a SyntaxError: Identifier 'name' has already been declared. ❌

// block scope ✅
if (true) {
    const x = 10; // x is only accessible within this block
    console.log(x); // Output: 10
}
console.log(x); // Output: ReferenceError: x is not defined ❌
// ----------------------------------------------------------------------------------------------

// in conclusion, we should use let and const instead of var to avoid unexpected behavior in our code and to make our code more readable and maintainable.
