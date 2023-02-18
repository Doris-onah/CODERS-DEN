let challenge = "30 Days Of JavaScript";

console.log(challenge); 
console.log(challenge.length); 

console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

console.log(challenge.substring(3, 20));

const sliced = challenge.slice(3, 18);
console.log(sliced); 

const includesScript = challenge.includes("Script");
console.log(includesScript); 

const array1 = challenge.split("");
console.log(array1); 


const array2 = challenge.split(" ");
console.log(array2); // Output: ["30", "Days", "Of", "JavaScript"]


const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const array3 = companies.split(", ");
console.log(array3); // Output: ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]


const newChallenge = challenge.replace("JavaScript", "Python");
console.log(newChallenge); // Output: 30 Days Of Python


const char = challenge.charAt(15);
console.log(char); // Output: J


const charCode = challenge.charCodeAt(11);
console.log(charCode); // Output: 74

// Use indexOf() method to determine the position of the first occurrence of "a"
const position = challenge.indexOf("a");
console.log(position); // Output: 4

let str = '30 Days Of JavaScript';
let lastIndex = str.lastIndexOf('a');
console.log(lastIndex); // output: 19

let sentence = 'You cannot end a sentence with because because because is a conjunction';
let index = sentence.indexOf('because');
console.log(index); // output: 31


let lastIndexOf = sentence.lastIndexOf('because');
console.log(lastIndexOf); // output: 47

let search = sentence.search('because');
console.log(search); // output: 31

let trimmedStr = str.trim();
console.log(trimmedStr); // output: '30 Days Of JavaScript'

let startWith = str.startsWith('30 Days');
console.log(startWith); // output: true

let endWith = str.endsWith('JavaScript');
console.log(endWith); // output: true


let matches = str.match(/a/g);
console.log(matches); // output: ['a', 'a']

let str1 = '30 Days of';
let str2 = 'JavaScript';
let mergedStr = str1.concat(' ', str2);
console.log(mergedStr); // output: '30 Days of JavaScript'


let repeatedStr = str.repeat(2);
console.log(repeatedStr); // output: '30 Days Of JavaScript30 Days Of JavaScript'



