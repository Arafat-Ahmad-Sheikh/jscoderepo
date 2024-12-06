// Primitive

// 7 types: String, Nmber, Bollean, null, undefined, Symbol, BigInt
// defining symbol
const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber = 4454546565844651588n;

console.log(id === anotherId)

// JS is dynamically typed langugage since it doesnt need one to define the datatype while assignment

// Non- Primitive(Reference)

// Array, Objects, Functions
const heros = ["ironman", "spiderman", "grey"]

// object ~ dictionary of python
let obj = {
    name:"arafat",
    college:"iitj",
}

const myFunction = function(){
    console.log("Hello World!");
    
}

myFunction()

console.log(typeof bigNumber);
