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

//level2 

let areaOftriangle = 0.5;
let base = window.prompt("Enter the base of the triangle");
let height = window.prompt("Enter the height of the triangle");
let cal = areaOftriangle * base * height
alert(`the area of thr triangle is ${cal})`)

let sideA = window.prompt("Enter the side A of the triangle");
let sideB = window.prompt("Enter the side B of the triangle");
let sideC = window.prompt("Enter the side C of the triangle");
let parameter = sideA + sideB + sideC;
alert(`the area of a paramiter is ${parameter}`)

let widthOfrectangle = window.prompt("Enter the width of the rectangle");
let heightOfrectangle = window.prompt("Enter the height of the rectangle");
let perimeterOfrectangle = 2 * (widthOfrectangle + heightOfrectangle);
const areaOfrectangle = widthOfrectangle * heightOfrectangle + perimeterOfrectangle;
alert(`the area of a rectangle is ${areaOfrectangle}`)

let radius = window.prompt("Enter the radius of the circle");
let pi = 3.14;
const area = pi * radius * radius;
let circimference = 2 * ( pi * radius);
alert(`the area of a circle is ${area} and the circumference is ${circimference}`)



// Define the equation
const equation = (x) => 2 * x - 2;
// Calculate the slope
const slope = 2;
// Calculate the y-intercept
const yIntercept = -2;
// Calculate the x-intercept
const xIntercept = 1; // Since x-intercept is (1, 0)

// Print the results
console.log("Slope: " + slope);
console.log("Y-intercept: " + yIntercept);
console.log("X-intercept: (" + xIntercept + ", 0)");

// Find the slope between points (2, 2) and (6, 10)
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;
const slopeBetweenPoints = (y2 - y1) / (x2 - x1);

// Print the slope between the points
console.log("Slope between points (2, 2) and (6, 10): " + slopeBetweenPoints);

// Find the x value where y = 0 for y = x^2 + 6x + 9
const a = 1;
const b = 6;
const c = 9;
const discriminant = Math.pow(b, 2) - 4 * a * c;
const xValueWhereYIs0 = (-b + Math.sqrt(discriminant)) / (2 * a);
console.log("x value where y = 0 for y = x^2 + 6x + 9: " + xValueWhereYIs0);


let EnterHours = window.prompt("Enter the hours");
let rate = window.prompt("Enter the rate");
const pay = EnterHours * rate;
alert(`your pay is ${pay}`)

let enterName = window.prompt("Enter your name");
if (enterName.length > 7) {
    console.log(`${enterName} is too long`)
}else if (enterName.length < 7) {
    console.log(`${enterName} is too short`)
}


let Firstname = window.prompt("enter your first name");
let familyname = window.prompt("enter your family name");
if(Firstname.length  > familyname.length) {
    console.log(`your first name ${Firstname} is longer than your family name ${familyname}`)
}
else if (familyname.length > Firstname.length) {
    console.log(`your family name ${familyname} is longer than your first name ${Firstname}`)
}

let myAge = 26
let yourAge = 14;
const math = myAge - yourAge;
console.log(`I am ${math} years older than you`)


let user = window.prompt("Enter your age");
if (user >= 18) {
    console.log(`your age is ${user} you are old enough to drive`)
}else if(user != 18) {
    console.log(`your age is ${user} you are too young to drive`)
}


const useryears = window.prompt("Enter number of years you live:");
const secondsInAYear = 365 * 24 * 60 * 60;
const maxYears = 100;
if (useryears > maxYears) {
    let secondsLived = maxYears * secondsInAYear;
    console.log(secondsLived)
}
else if(useryears < maxYears) {
    let secondsLived = useryears * secondsInAYear;
    console.log(secondsLived)
}


// Create a new Date object
const dates = new Date();


const formattedDate1 = dates.getFullYear() + "-" + (dates.getMonth() + 1) + "-" + dates.getDate() + " " + dates.getHours() + ":" + dates.getMinutes();
console.log(formattedDate1);

const formattedDate2 = dates.getDate() + "-" + (dates.getMonth() + 1) + "-" + dates.getFullYear() + " " + dates.getHours() + ":" + dates.getMinutes();
console.log(formattedDate2);

const formattedDate3 = dates.getDate()+ "/" + (dates.getMonth() + 1) + "/" + dates.getFullYear() + " " + dates.getHours()+ ":" + dates.getMinutes();
console.log(formattedDate3);

//level3
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let todaysDate = new Date();
let format =todaysDate.getFullYear() + "-" +(todaysDate.getMonth() + 1) + "-" + (todaysDate.getDate()) + " " + `0${(todaysDate.getHours())}` + ":" + `0${(todaysDate.getMinutes())}`;
console.log(format)











