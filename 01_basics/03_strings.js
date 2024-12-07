const name = "arafat"
let hobby = "drawing"

console.log("I am "+ name+" and my hobby is "+ hobby);
console.log(`I am ${name} and my hobby is ${hobby}`);

const gameName = new String('Arafat-AS')

console.log(gameName);
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));
console.log(gameName.indexOf('p')); //-1 means not present

// Configured git

const newGameName = gameName.substring(0, 4)
console.log(newGameName);

console.log(gameName.slice(-5, 7));

console.log("      arafat  ");
console.log("      arafat  ".trim());

let url = "https://www.google%20images.com"
console.log(`Before - ${url}`);

url = url.replace("%20", "-")
// console.log(url);
console.log(`After - ${url}`);

console.log(url.includes('google'));
console.log(url.includes('gun'));

console.log(gameName.split('-'));

const statement = "I am loving learning js"
console.log(statement.split(' '));
