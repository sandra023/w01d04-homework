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














