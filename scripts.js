// How Edabit Works 
// function hello() {
// 	return "hello edabit.com"
// }

// Return the Sum of Two Numbers
// function addition(a, b) {
// 	return a + b
// }

// Convert Minutes into Seconds
// function convert(minutes) {
// 	return minutes * 60
// }

// Return the Next Number from the Integer Passed
// function addition(num) {
// 	return num + 1
// }

// Return Something to Me!
// function giveMeSomething(a) {
//   return 'something ' + a
// }

// Is the Number Less than or Equal to Zero?
// function lessThanOrEqualToZero(num) {
// 	return num <= 0 ? true : false 
// }

// Find the Perimeter of a Rectangle
// function findPerimeter(length, width) {
// 	return 2*(length + width)
// }

// Sum of Polygon Angles
// function sumPolygon(n) {
// 	return n > 2 ? (n - 2) * 180 : null
// }

// Convert Hours into Seconds
// function howManySeconds(hours) {
// 	return hours * 60 * 60
// }

// Area of a Triangle
// function triArea(base, height) {
// 	return (base * height) / 2
// }

// Convert Age to Days
// function calcAge(age) {
// 	return age * 365
// }

// Power Calculator
// function circuitPower(voltage, current) {
// 	return voltage * current
// }

// Buggy Code (Part 7)
// function swap(a, b) {
// 	c = b
// 	b = a
// 	a = c
// 	return [a, b]
// }

// Are the Numbers Equal?
// function isSameNum(num1, num2) {
// 	return num1 === num2
// }

// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript
// function fixTheMeerkat(arr) {
// 	arr.reverse()
// 	return arr
// }

// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
// function sameCase(a, b){
// 	if ( (typeof a !== 'string' || typeof b !== 'string') || (a.match(/[a-z]/i) == null || b.match(/[a-z]/i) == null) ) {
// 	  return -1
// 	} else if ( (a === a.toUpperCase() && b === b.toUpperCase() ) || ( a === a.toLowerCase() && b === b.toLowerCase() ) ) {
// 	  return 1
// 	} else {
// 	  return 0
// 	}
// }

// How Much is True?
// Create a function which returns the number of true values there are in an array.
// function countTrue(arr) {
// 	var countTrue  = 0
// 	arr.forEach(element => {
// 		element === true ? countTrue += 1 : null
// 	});
// 	return countTrue
// }

// Find Number of Digits in Number
// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
// function num_of_digits(num) {
// 	return num.toString().length
// }

// Right Shift by Division
// The right shift operation is similar to floor division by powers of two.
// Sample calculation using the right shift operator ( >> ):
// 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
// -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
// -5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
// Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.
// function shiftToRight(x, y) {
// 	return x / (2**y)
// }

// Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
// function sevenBoom(arr) {
// 	var boom = 'There is no Boom'
// 	arr.forEach(element => {
// 		if(element === 7) boom = 'Boom'
// 	});
// 	return boom
// }

// Oddish vs. Evenish
// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// function oddishOrEvenish(nums) {
// 	var arr = Array.from(String(nums), num => Number(num))
// 	return arr.reduce((acc, crVal) => acc + crVal) % 2 === 0 ? 'Evenish' : 'Oddish'
// }

// Length of a Nested Array
// Write a function that returns the total number of non-nested items in a nested array.
// var counter = 0
// function getLength(arr) {
// 	arr.forEach(element => {
//     if (Array.isArray(element)) {
//       getLength(element)
//     } else {
//       counter += 1
//     }
//   });
//   return counter
// }

// Numbers in Strings
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
// Bonus: Try solving this without RegEx.
// function numInStr(arr) {
//   var arr2 = []
//   nums = [0,1,2,3,4,5,6,7,8,9]
//   var controller = false
// 	arr.forEach((element) => {
//     controller = false
//     for (let index = 0; index < nums.length; index++) {
//       controller = element.includes(nums[index])
//       if (controller) break
//     }
//     controller ? arr2.push(element) : arr2.push("")
//   })
//   return arr2
// }
