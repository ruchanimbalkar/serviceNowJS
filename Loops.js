//
// Loops
//
var i = 0;
while (i < 5) {
  gs.info(i);
  i++;
}
//While loop ends because condition is false i equals 5 at the end of last iteration and the condition 5<5 is false
gs.info("done i=" + i);

//
// Breaking out of a while loop
//
var i = 0;
while (true) {
  if (i == 5)
    //Ends the loop
    break;
  gs.info(i);
  ++i;
}
gs.info("done");

//Difference between ++i and i++

var num = 3;
//Here num is incremented by 1 first and then assigned to the variable 'a'
var a = ++num;
//Both num and a are 4
gs.info("a is " + a + ", num is " + num); // a is 4 , num is 4
//Here b is first assigned the value of num which is 4 and then num is incremented by 1
var b = num++;
// b is 4 and num is 5
gs.info("b is " + b + ", num is " + num); // b is 4, num is 5

//
// Continue - jumping back to the while condition
//
var i = 0;
var done = false;
while (!done) {
  if (i < 5) {
    ++i;
    gs.info(i + " done=" + done);
    continue;
  }
  gs.info("I think we are done");
  done = true;
}
gs.info(i);
