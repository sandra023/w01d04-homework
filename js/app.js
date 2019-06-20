//1. Verbal Questions
// What is the difference between a parameter and an argument?
//Parameters are variables that are part of the function's definition
//Arguments are the values that are passed to the function when invoked.

// Within a function, what is the difference between return and console.log?
//Return defines the function. Console.log just prints to the console.

// What are the implications of the ability of a function to return a value?
//Function return values that we can use in other code later on helping to keep
//our code DRY.

//2. Palindrome Again.

// const reverseOfString = (string) => {
// 	reverseOfStringLowerCase = " ";
// 	for (let i = string.length-1; i >= 0; i--){	
// 	reverseOfStringLowerCase += string[i]
// 	return reverseOfStringLowerCase.toLowerCase()
// }}
// reverseOfString("hello");


const checkPalindrome = (string) => {
	let reverseOfString = "";
	for(let i = string.length-1; i >= 0; i--){
	reverseOfString += string[i].toLowerCase()
}	if (string.toLowerCase()===reverseOfString) {
		return 'This is a Palindrome'
	} else {
		return 'This is not a Palindrome'
	}
}

console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));


// 3. Digit Sum
// Write a function sumDigits that accepts a number and returns
//  the sum of its digits.

// const sumDigits = () => {
// 	for (let i = 0; )
// }

// console.log(sumDigits(42));










