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
