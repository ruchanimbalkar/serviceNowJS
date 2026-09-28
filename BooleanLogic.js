//BooleanLogic
var openValve = true;
if (openValve) gs.info("Valve is currently open.");

openValve = false;
if (!openValve)
  // openValve === false |  Valve is not open
  gs.info("Valve is currently closed.");
