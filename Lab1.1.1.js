/*****************************************************
 * Lab 1.1.1 - Variable basics
 *****************************************************/

/*
 * Step 1. Create a string variable
 *   and assign it the value of your name
 *   (no output expected. The variable will be used in step 4)
 */
var myName = "Rucha Nimbalkar ";

/*
 * Step 2. Convert the numString variable to a numeric value
 *   then multiply it by 5 and output the result using gs.info()
 *
 *   HINT: Use the parseInt() function to convert a string to an integer
 *         Example: var num = parseInt(some_variable);
 *
 *   Expected output: numericValue=50
 */

var numString = "10";
var numericValue = parseInt(numString);
var product = numericValue * 5;
gs.info("numericValue=" + product);

/*
 * Step 3. Rewrite this assignment to do the addition first
 *   so the result is 30 instead of 25
 *
 *   HINT: Use parentheses to change the order of operations
 *
 *   Expected output: answer=30
 */
var answer = (5 + 10) * 2;
gs.info("answer=" + answer);

/*
 * Step 4. Using the variable from the first exercise,
 *   use gs.info() to output a string with the message:
 *   I call this: "Chuck's first script!"
 *   (of course, replace Chuck with your variable value)
 *
 *   Note that there are several ways to do this. Be sure to
 *   use the backslash character to escape the single quote
 *   in the string if necessary.
 *
 *   Expected output: I call this: "(YourName)'s first script!"
 */

gs.info(myName + "'s first script!");
