let score = "33"
console.log(typeof(score));
// converting string to number
let valueInNumber = Number(score)
console.log(score);
console.log(typeof(valueInNumber));
console.log("-------------");

let score1 = "33abs"
console.log(typeof score1);
console.log(typeof(Number(score1)));
console.log(Number(score1));

console.table([score, valueInNumber, score1, Number(score1)])

// ************Operations***************

let value = 10
let negativeValue = -value
console.log(negativeValue);

console.log(2**2);

// string string addition/concatenation
console.log("Arafat"+String(value));

// confusions in string conversions
console.log(1+2+3);
console.log("1"+2+3);
console.log(1+"2"+3);
console.log(1+2+"3");

//Post And Pre Increments are Exactly like C/C++
let gameCounter = 100
console.log(gameCounter++);
console.log(++gameCounter);

