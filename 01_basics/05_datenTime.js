let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

let myCrestedDate = new Date(2022, 1, 14)
let myCrestedDate1 = new Date("2022-01-14")
let myCrestedDate2 = new Date("01-14-2022")

console.log(myCrestedDate.toLocaleString());
console.log(myCrestedDate1.toLocaleString());
console.log(myCrestedDate2.toLocaleString());

let myTimeStamp = Date.now() //miliseconds from 1 jan 1970
console.log(myTimeStamp);
console.log(console.log(myCrestedDate.getTime()));

// Calculating Miliseconds in an yr
let date_i = new Date(2023, 1, 1)
let date_f = new Date(2024, 1, 1)

console.log(date_f.getTime()-date_i.getTime());

console.log(Math.floor(Date.now()/1000));


// gets
console.log(myDate);
console.log(myDate.getDay());
console.log(myDate.getDate());
console.log(myDate.getMonth()+1);

console.log(`${myDate.getMonth()+1} is this month`);

console.log(myDate.toLocaleString('default',{
    weekday: "long"
}));
