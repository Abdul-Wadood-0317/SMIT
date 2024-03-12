// Even/Odd Number Checker:
let number = prompt("Enter a number:");
if (number % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}


// Positive/Negative Number Checker:
let number = prompt("Enter a number:");
if (number > 0) {
    console.log("The number is positive");
} else if (number < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}

// Maximum of Two Numbers:
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

let maxNumber = Math.max(num1, num2);
console.log("The larger number is: " + maxNumber);

// Minimum of Three Numbers:
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");

let minNumber = Math.min(num1, num2, num3);
console.log("The smallest number is: " + minNumber);

// Grade Calculator:
let marks1 = prompt("Enter marks for subject 1:");
let marks2 = prompt("Enter marks for subject 2:");
let marks3 = prompt("Enter marks for subject 3:");

let average = (parseFloat(marks1) + parseFloat(marks2) + parseFloat(marks3)) / 3;

if (average >= 90) {
    console.log("Grade: A");
} else if (average >= 80) {
    console.log("Grade: B");
} else if (average >= 70) {
    console.log("Grade: C");
} else if (average >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


// Temperature Converter:
let celsius = prompt("Enter temperature in Celsius:");
let fahrenheit = (celsius * 9/5) + 32;
console.log("Temperature in Fahrenheit: " + fahrenheit);

// Triangle Type Identifier:

let side1 = prompt("Enter the length of side 1:");
let side2 = prompt("Enter the length of side 2:");
let side3 = prompt("Enter the length of side 3:");

if (side1 === side2 && side2 === side3) {
    console.log("Equilateral triangle");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles triangle");
} else {
    console.log("Scalene triangle");
}

// Character Vowel/Consonant Checker:
let character = prompt("Enter a character:").toLowerCase();

if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    console.log("Vowel");
} else {
    console.log("Consonant");
}


// Power Calculator:
let base = prompt("Enter the base number:");
let exponent = prompt("Enter the exponent:");

let result = Math.pow(base, exponent);
console.log("Result: " + result);

// Age Group Classifier:
let age = prompt("Enter your age:");

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 64) {
    console.log("Adult");
} else {
    console.log("Senior");
}
