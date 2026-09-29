/*****************************************************
 * Lab 3.1.1 - create a simple table
 *****************************************************/

/*
 * Step 1. Using nested loops, create a simple table of rows and columns
 *   that displays the following data:

row 0: 0 1 2 3 4 5 
row 1: 0 1 2 3 4 5 
row 2: 0 1 2 3 4 5 
row 3: 0 1 2 3 4 5 
row 4: 0 1 2 3 4 5

 * Hint: You will need to use a string variable to build each row
 *     and then output it in the right place
 */
var strOutput = "";
for (var row = 0; row < 5; row++) {
  strOutput = "row " + row + ": ";
  for (var col = 0; col < 6; col++) {
    strOutput += col + " ";
  }
  //Print output string
  gs.info(strOutput);
  //Reset output string
  strOutput = "";
}
