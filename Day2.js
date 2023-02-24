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



//EXCERICES LEVEL 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

let num ="10";

let Python = "Python jargon";
let includes= Python.includes("on");
console.log(includes);

let jargon = "I hope this course is not full of jargon";
let checkIncludes = jargon.includes("jargon");
console.log(checkIncludes);

let random = Math.floor(Math.random() * 101);
console.log(random);

let random1 = Math.floor(Math.random() * 51) + 50;
console.log(random1);

let random3 = Math.floor(Math.random() * 255 - 0) + 0;
console.log(random3);


const strg = "JavaScript";
const randChar = strg.charAt(Math.floor(Math.random() * strg.length));
console.log(randChar);

console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");


let sent = "You cannot end a sentence with because because because is a conjunction";
let SubSent = sent.substr(31, 23);
console.log(SubSent);

//LEVEL 3
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let numTimes = love.match(/love/gi).length;
console.log(numTimes);

let findMatch = 'You cannot end a sentence with because because because is a conjunction';
let findMatch2 = findMatch.match(/because/gi);

const sentenceClean = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and&';
const cleanedSentence = sentenceClean.replace(/[%$@&#+;]/g, '').toLowerCase();
console.log(cleanedSentence);