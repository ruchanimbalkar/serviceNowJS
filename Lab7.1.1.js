/*****************************************************
 * Lab 7.1.1 - Manage a fleet of cars
 *****************************************************/

/*
 * Step 1. Given the list of cars below, use a for loop to calculate the average mileage
 *   of all the cars in the list and output the result using gs.info()
 *
 * HINT: You'll need to accumulate the total mileage in a variable
 *   and then divide by the number of cars in the list
 *   The number of cars in the list can be determined using the .length property
 *   of the array (e.g. cars.length)
 *
 * STRETCH GOAL: Create a second function to find the car with the highest
 *    mileage and display the result after the function returns
 *
 * Expected result:
 *   The average mileage of the cars is: 20.9
 */

//The list of cars
var cars = [
  {
    make: "Mazda",
    model: "Mazda3",
    year: 2012,
    mileage: 16,
  },
  {
    make: "Mercedes-Benz",
    model: "CL-Class",
    year: 2006,
    mileage: 16,
  },
  {
    make: "Volkswagen",
    model: "GTI",
    year: 1997,
    mileage: 19,
  },
  {
    make: "Mitsubishi",
    model: "Challenger",
    year: 2001,
    mileage: 22,
  },
  {
    make: "Volvo",
    model: "S60",
    year: 2004,
    mileage: 28,
  },
  {
    make: "Toyota",
    model: "Solara",
    year: 2006,
    mileage: 29,
  },
  {
    make: "Maserati",
    model: "Spyder",
    year: 2004,
    mileage: 17,
  },
  {
    make: "Land Rover",
    model: "Defender 90",
    year: 1994,
    mileage: 21,
  },
  {
    make: "Suzuki",
    model: "SX4",
    year: 2011,
    mileage: 18,
  },
  {
    make: "GMC",
    model: "Sonoma",
    year: 1997,
    mileage: 23,
  },
];

function averageMileage() {
  var sumOfMileages = 0;
  for (var i = 0; i < cars.length; i++) {
    sumOfMileages += cars[i].mileage;
  }
  var average = sumOfMileages / cars.length;
  return average;
}

gs.info("Average mileage is " + averageMileage());

function maxMileage() {
  var maxValue = cars[0].mileage;
  for (var i = 0; i < cars.length; i++) {
    if (maxValue < cars[i].mileage) {
      maxValue = cars[i].mileage;
    }
  }
  return maxValue;
}

gs.info("Highest mileage is " + maxMileage());

//Using forEach:

//Average Mileage
function printAverageMileage() {
  var totalMileage = 0;
  cars.forEach((car) => (totalMileage += car.mileage));
  gs.info("Average Mileage = " + totalMileage / cars.length);
}

printAverageMileage();

// REPLACE THIS COMMENT WITH YOUR CODE
function printMaxMileage() {
  var mileageArray = new Array();
  cars.forEach((car) => mileageArray.push(car.mileage));
  gs.info("Max Mileage = " + mileageArray);
  // console.log(Math.max(...mileageArray));
}

printMaxMileage();
