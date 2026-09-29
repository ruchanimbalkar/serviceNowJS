/*****************************************************
 * Lab 2.1.1 - Use conditional logic
 *****************************************************/

/*
 *  Step 1. Determine when it's time to turn on/off the heat using
 *    if/else if/else statements...
 *    Use the variables below to determine when to turn on/off the heat
 *      If the home is occupied and
 *      the temperature is less than the desired temperature
 *      and the heater is off, turn on the heat
 *    If the home is occupied
 *      and the temperature is greater than the desired temperature
 *      and the heater is on, turn off the heat
 *    If the home is not occupied, do nothing
 *    Use gs.info() to output a messager indicating the action taken
 */
var temperature = 55;
var desiredTemperature = 65;
var heaterIsOn = false;
var homeIsOccupied = true;

/* temperature is less than desiredTemperature and home is occupied and heater is off */
if (temperature < desiredTemperature && homeIsOccupied && !heaterIsOn) {
  heaterIsOn = true;
  gs.info("Turning on the heat!");

  /* temperature is greater than desiredTemperature and heater is on and home is occupied*/
} else if (temperature > desiredTemperature && heaterIsOn && homeIsOccupied) {
  heaterIsOn = false;
  gs.info("Turning off the heat!");

  /* home is not occupied */
} else if (!homeIsOccupied) {
  gs.info("No action needed");
}

/*
 * Step 2. Experiment with the variable above values and
 *   test your work in other cases
 *  For example,
 *    * change the temperature to 75 and the heaterIsOn to true and test the results
 *    * Change homeIsOccupied to false and test the results
 */
temperature = 75;
heaterIsOn = true;
homeIsOccupied = false;
gs.info("Experimenting with new values to test my work");
if (temperature < desiredTemperature && homeIsOccupied && !heaterIsOn) {
  heaterIsOn = true;
  gs.info("Turning on the heat!");

  /* temperature is greater than desiredTemperature and heater is on and home is occupied*/
} else if (temperature > desiredTemperature && heaterIsOn && homeIsOccupied) {
  heaterIsOn = false;
  gs.info("Turning off the heat!");

  /* home is not occupied */
} else if (!homeIsOccupied) {
  gs.info("No action needed");
}
