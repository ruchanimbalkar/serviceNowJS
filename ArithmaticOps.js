//
// Arithmetic Operators
//
var a = 0;
var b = 1;
gs.info(a < b); //true

var n = "3";
var i = 3;
gs.info(n == i); // REALLY?!! //true because this is not a strict check number 3 is equal to string 3. For strict check we do n===i
gs.info((b = i)); //3
gs.info("b = " + b); // b equals 3 because of the initial statement on previous line
