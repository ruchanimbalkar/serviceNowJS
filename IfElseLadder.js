//
// L13S01 - Multiple cases
//
// Using if/else if/else if...
var level = 5;
var message = "";
if (level == 0) message = "Empty";
else if (level == 1 || level == 2) message = "Low";
else if (level == 3) message = "Medium";
else if (level == 4) message = "High";
else if (level == 5) message = "Full";
else message = "Uh-oh";
gs.info("Level=" + level + " status=" + message);

//Nested if
var a = 3;
var b = 3;
var c = 5;

if (a < b) {
  if (b < c) {
    gs.info("a,b, and c are in order");
    gs.info("that means a is less than c");
  }
} else {
  gs.info("a is greater than or equal to b");
}
