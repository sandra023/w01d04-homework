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

// Write a function checkPalindrome that accepts a single argument, a string. 
// Yes, you've done it before, but do it again. Later in this assignment we're 
// gonna beef up our palindrome function some. See if you can do it without 
// looking back at your previous answer. The function should return true if 
// the string is a palindrome, false if not. Make sure your function will 
// give the correct answer for words with capital letters.


// const checkPalindrome = (string) => {
// 	let reverseOfString = "";
// 	for(let i = string.length-1; i >= 0; i--){
// 	reverseOfString += string[i].toLowerCase()
// }	if (string.toLowerCase()===reverseOfString) {
// 		return 'This is a Palindrome'
// 	} else {
// 		return 'This is not a Palindrome'
// 	}
// }

// console.log(checkPalindrome("Radar"));
// console.log(checkPalindrome("Borscht"));


// 3. Digit Sum
// Write a function sumDigits that accepts a number and returns
//  the sum of its digits.

// const sumDigits = (num) => {

//          let sum = 0;
//          while(num > 0) {
//             sum += num % 10;
//             num = Math.floor(num / 10);
//          }console.log(sum);

// }

// console.log(sumDigits(127));


// 4. Pythagoras
// Write a function calculateSide that takes two arguments: 
// sideA and sideB, and returns the solution for sideC using 
// the Pythagorean theorem.

// hint: discover the Pythagorean Theorem on a website 
// called google.com
// hint: checkout the Math methods in javascript


// const calculateSide = (sideA, sideB) =>{
// return Math.sqrt(sideA*sideA + sideB*sideB)
// }
// console.log(calculateSide(2,4));
//a*a * b*b = c*c

// 5. Sum Array
// Write a function sumArray that takes an array as an argument. 
// The array should contain numbers. The function should return 
// the sum of the numbers in the array.

// const sumArray = (ary) => {
// 	sum = 0;
// 	for (let i= 0; i <ary.length; i++){
// 		sum += ary[i];
// 	}
// 	return sum
// console.log(sum);
// }

// console.log(sumArray([1, 2, 3, 4, 5, 6]));


// 6. Prime Numbers
// A Prime number is a number that is not evenly divisible by another 
// number except 1 and itself. If you want to read more deeply about 
// it, go here. To test whether a number is Prime, you only need to test 
// as far as the square root of that number. This is advisable for optimization 
// and testing large numbers.

// Step One
// Write a function called checkPrime that will test whether a number is Prime. 
// The function will return true (Boolean) if Prime, false if not. 
// Hint: Check every number up to the square root. To do this, try a for loop.

// Step Two
// Write another function called printPrimes that will print (console log) all 
// the Primes up to an arbitrary limit. For example, if you invoke your 
// function with printPrimes(97), it will print all the Prime numbers up to 
// and including 97. This function can call on the previous checkPrime function.


// const checkPrime = (number) => {
// 	for(let i = 2; i<number; i++){
// 		if (number % i === 0){
// 			return 'This number is not prime.'
// 		} else {
// 			return 'This number is prime.'
// 		}
// }}

// console.log(checkPrime(7));




const checkPrime = (number) => {
	if ( number === 0 || number === 1) {
            return false;
	} for(let i = 2; i<number; i++){
		if (number % i === 0){
		return false
		} else if (number === 2) { }
}return true
	}
// console.log(checkPrime(81));

const printPrimes = (arbitrary) => {
	for(let i = 0; i<=arbitrary; i++){
		if (checkPrime(i) === true){
			console.log(i)

		}
}
}

printPrimes(100);








