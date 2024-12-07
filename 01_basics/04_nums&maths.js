const balance = new Number(100)
const balance1 = 100

console.log(balance1);
console.log(balance);

console.log(balance.toFixed(2)); //precision value

const a = 1123.8
console.log(a.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());

console.log(Math.abs(-1));
console.log(Math.round(4.6));
console.log(Math.floor(4.6));
console.log(Math.max(4, 1, -1, 2));
console.log(Math.min(4, 1, -1, 2));
console.log((Math.random()*10 + 1).toFixed(0));

const min = 10
const max = 20
// Random Numbers between min and max
console.log(Math.floor(Math.random()*(max-min + 1)) + min);