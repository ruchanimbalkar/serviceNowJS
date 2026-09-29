/*****************************************************
 * Lab 5.1.1 - Catch errors
 *****************************************************/

/*
 * The code below has a function named 'splitTheCheck'. It is supposed to
 * split a restaurant check evenly among a group of people.
 * The output should look like this (when a valid data is used)
 * Total=317.00 guests=12 each guest owes: 26.42
 *
 * However, the function doesn't handle bad data very well.
 * Your task is to make the function more robust by adding error handling.
 *
 * Step 1. Create a try/catch block around the 'return' statement in the function
 *
 * Step 2. In the try section, create a if statement in the to ensure
 *    the number of people is greater than zero.
 *      If the number of people is zero or less, throw an error with a message
 *      indicating the number of people must be greater than zero.
 *
 * Step 3. STRETCH GOAL: Create another check to ensure the number of people is a valid number
 *    If it's not a valid number, throw an error with a message indicating
 *    the number of people must be a valid number.
 *    Hint: Use isNaN(variableName) to determine if a value is not a number
 *
 * Step 4. STRETCH GOAL: Return a default value if an error occurs
 *
 * Test your work by running the script with different values for 'guests'
 * including 0, negative values, and a non-numeric value like "abc"
 *
 * Example try/catch block
 *
 * try {
 *       Code that may throw an error
 *     if (condition) {
 *         throw new Error("Descriptive error message");
 *     }
 *        More code that may throw an error
 * } catch (error) {
 *       Code to handle the error
 * }
 */
function splitTheCheck(billAmount, numberOfPeople) {
  try {
    if (numberOfPeople <= 0) {
      throw new Error("the number of people must be greater than zero");
    }
    if (isNaN(numberOfPeople)) {
      throw new Error("the number of people must be a number");
    }
    return billAmount / numberOfPeople;
  } catch (error) {
    gs.info("the number of people must be a number greater than zero");
  }
}

var total = 317;
var guests = 12;

gs.info(
  "Total=" +
    total.toFixed(2) +
    " guests=" +
    guests +
    " each guest owes: " +
    splitTheCheck(total, guests).toFixed(2)
);

// Test your work by running the script with other values
// for guests such as negative numbers and strings

total = 300;
guests = 0;

gs.info(
  "Total=" +
    total.toFixed(2) +
    " guests=" +
    guests +
    " each guest owes: " +
    splitTheCheck(total, guests).toFixed(2)
);

total = 100;
guests = -3;

gs.info(
  "Total=" +
    total.toFixed(2) +
    " guests=" +
    guests +
    " each guest owes: " +
    splitTheCheck(total, guests).toFixed(2)
);
