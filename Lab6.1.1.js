/*****************************************************
 * Lab 6.1.1 - Sum an array of numbers
 *****************************************************/

/*
 * Step 1. Create a function that calculates the sum of all numbers in an array
 *
 *   HINT: Use a for loop to iterate through the array elements
 *   and accumulate the sum in a variable
 *   The function should take one parameter (the array of numbers),
 *   calculate a sum, and return the sum to the caller
 *
 * STRETCH GOAL: Reduce the repeated calls to the function by creating
 *   an array of test data and using a loop to call the function
 *   with each array in the test data.
 *   HINT: You can create an array of arrays.
 */

function sumArray(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Call the function and output the results using gs.info()
var array1 = [1, 2, 3, 4, 5];
var result1 = sumArray(array1);
gs.info("The sum of array1 is: " + result1);

// Test with a different array
var array2 = [10, 20, 30];
var result2 = sumArray(array2);
gs.info("The sum of array2 is: " + result2);

// Test with another array
var array3 = [7, 14, 21];
var result3 = sumArray(array3);
gs.info("The sum of array3 is: " + result3);

/*
 * Expected results:
 *
 * The sum of array1 is: 15
 * The sum of array2 is: 60
 * The sum of array3 is: 42
 */
