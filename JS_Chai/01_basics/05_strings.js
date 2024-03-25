const name = "abdulwadood"
const repocount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);


// console.log(gameName[6]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

const gameName = new String ("wadood-wcode-com")


// console.log(gameName.charAt("2"));
// console.log(gameName.indexOf("wc"));

const newString = gameName.substring(0,4) 
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "               wadood             ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://abdulwadood.com/wadood%20ahmed"
console.log(url.replace("%20","-"));

console.log(url.includes("ahmedd"));


console.log(gameName.split("-"));
console.log(gameName.split("5"));


