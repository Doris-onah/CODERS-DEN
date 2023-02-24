const firstName = "Rahim";
const lastName = "Uddin";
const country = "Bangladesh";
const city = "Dhaka";
const age = 25;
const isMarried = false;
const year = 2021;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

let numType = 10;
let numstr = "10";
if(numType === numstr){
    console.log("They are equal");
}else{
    console.log("They are not equal");
}
//OR

console.log(numType == numstr)

let parse = parseInt("9.8");
let con = 10;
console.log(parse == con);

//TRUTHY VALUE
let truthyval = "am true";
console.log(truthyval)
let truthyval2 = 10;
console.log(truthyval2)
let truthyval3 = true;
console.log(truthyval3)

//FALSY VALUE
let falseval1 = "";
console.log(falseval1)
let falseval2 =0;
console.log(falseval2)
let falseval3 = null;
console.log(falseval3)

console.log(4 > 3);     // Output: true
console.log(4 >= 3);    // Output: true
console.log(4 < 3);     // Output: false
console.log(4 <= 3);    // Output: false
console.log(4 == 4);    // Output: true
console.log(4 === 4);   // Output: true
console.log(4 != 4);    // Output: false
console.log(4 !== 4);   // Output: false
console.log(4 != '4');  // Output: false
console.log(4 == '4');  // Output: true
console.log(4 === '4'); // Output: false

let word1 = "python";
console.log(word1.length) 
let word2 = "jargon";
console.log(word2.length) 
console.log(word1.length != word2.length) 


if(4 > 3 && 10 < 12) {
    console.log("True")
}

if(4 > 3 || 10 > 12) {
    console.log("false") 
};
if(4 > 3 || 10 > 12) {
    console.log("True")
};
if(!(4 > 3)) {
    console.log("True")
};
if(!(4 < 3)) {
    console.log("True")
};
if(!(false)) {
    console.log("True")
};
if(!(4 > 3 && 10 < 12)) {
    console.log("True")
};
 
if(!(4 > 3 && 10 > 12)) {
    console.log("True")
}
if(!(4  === "4")) {
    console.log("True")
}
   
let onDragon = "dragon";
let onPython = "python";
console.log(onDragon.includes("on")); 
console.log(onPython.includes("on"));


const today = new Date(); 

const years = today.getFullYear();
console.log(years);  

const month = today.getMonth();
console.log( parseInt(month));   

const date = today.getDate(); 
console.log(date); 

let hour = today.getHours(); 
console.log(hour);

let min = today.getMinutes();
console.log(min);


// Get the number of seconds since 1970 of the current time
const currentSeconds = Math.floor(today.getTime() / 1000);

// Get the number of seconds since 1970 of January 1, 1970
const jan1Seconds = new Date("January 1, 1970").getTime() / 1000;

// Calculate the difference between the two values
const numSeconds = currentSeconds - jan1Seconds;

console.log( numSeconds);



// let salary = 5000 * 12;
// let bonus = 10000;
// let onlineCourse = 15000;
// let total = salary + bonus - onlineCourse;
// console.log(total);