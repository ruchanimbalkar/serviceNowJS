//Functions

//Simple function of sayHello()
//Function definition of sayHello()
function sayHello() {
  gs.info("Hello");
}

sayHello(); //Function call

//Convert to Celsius
//Function definition of toCelsius
function toCelsius(fahrenheit) {
  var c = (5 / 9) * (fahrenheit - 32);
  gs.info(
    fahrenheit + " degree fahrenheit in celcius is " + c + " degree celsius."
  );
}

toCelsius(32);
toCelsius(100);

//Global vs local scope
//Convert to Celsius
var getC; //Global variable
function convertToCelsius(fahrenheit) {
  var c = (5 / 9) * (fahrenheit - 32); //local scope limited to this function
  gs.info(
    fahrenheit + " degree fahrenheit in celcius is " + c + " degree celsius."
  );
  return c;
}
getC = convertToCelsius(80);
//gs.info(c); // c is local to function scope and this won't work.
gs.info(getC);

/**
 * 
 * 
 * //
// L19S05 - Global variables and local
//
var convertTo = 'F';

function toCelsius(f) {

    var c = (5 / 9) * (f - 32);
        
    return c;
}

function toFahrenheit(c) {

    var f = c * 9 / 5 + 32;
        
    return f;
}

function convertTemp(temp) {

  // use the global variable to determine conversion
  if (convertTo == 'C') {
    return toCelsius(temp);
  } else {
    return toFahrenheit(temp);
  }
}

gs.info(convertTemp(100));
 */

//
// L19S06 - Self running function
//

// This code is outside the function
var i = 20;
gs.info("i=" + i);
(function () {
  // Local variable
  i = 10; // uh-oh, forgot the var!

  gs.info("i=" + i);
})();

i = 3;
gs.info("i=" + i);
