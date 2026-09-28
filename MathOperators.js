//
// Mathematical operators
//
var num = 12;
var secondNum = 13;
// num = num + 2
num += 2; //num is 14 now
gs.info(num);
gs.info(num + secondNum);

//Increment by 1
num++; //num is 14 + 1= 15 now
//Decrement by 1
secondNum--; // num is 13-1 = 12 now

gs.info("num = " + num); //num = 15
gs.info("secondNum = " + secondNum); //secondNum = 12

gs.info("num * secondNum = " + num * secondNum); //15 x 12 = 180
gs.info("num / secondNum = " + num / secondNum); // 15 / 12 = 1.25

// Modulo - get the remainder of a division
gs.info("");
gs.info(num);
gs.info(secondNum);
gs.info(num % secondNum);

var c = (5 + 4) * 2;
gs.info(c); //18

gs.info(3 + 2 * 5); //13

gs.info((3 + 2) * 5); //25
