/*****************************************************
 * Lab 4.1.1 - Caclulate simple interest
 *****************************************************/

/*
 * Step 1. Create a function that caculates the simple interest on a loan
 *   The formula for simple interest is:  Interest = Principal x Rate x Time
 *   Where:
 *      Principal is the amount of the loan
 *      Rate is the interest rate (as a decimal, so 5% would be 0.05)
 *      Time is the time in years
 */
function calculateSimpleInterest(principalAmount, rateOfInterest, timeInYears) {
  // Calculate the interest using the formula above
  var interest = principalAmount * rateOfInterest * timeInYears;

  // REPLACE THIS COMMENT WITH YOUR CODE TO RETURN THE INTEREST TO THE CALLER
  return interest;
}

// Call the function and output the results using gs.info()
var principal = 1000; // Example principal amount
var rate = 0.05; // Example interest rate (5%)
var time = 3; // Example time in years

var interest = calculateSimpleInterest(principal, rate, time);
gs.info(
  "The simple interest on a loan of $" +
    principal +
    " at an interest rate of " +
    rate * 100 +
    "% over " +
    time +
    " years is $" +
    interest
);

// Test with other values
principal = 2000;
rate = 0.03; // 3%
time = 5;
// Call the function again
// output the results
interest = calculateSimpleInterest(principal, rate, time);
gs.info(
  "The simple interest on a loan of $" +
    principal +
    " at an interest rate of " +
    rate * 100 +
    "% over " +
    time +
    " years is $" +
    interest
);
// Expected results:
// The simple interest on a loan of  at an interest rate of 5% over 3 years is
// The simple interest on a loan of  at an interest rate of 3% over 5 years is
