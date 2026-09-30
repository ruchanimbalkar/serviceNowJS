//Object
var person = {
  firstName: "Chikoo",
  lastName: "Fruit",
  age: 1000,
};

gs.info("person = " + person.firstName + " " + person.lastName);
// gs.info("person address = " + person.address); // Error because address property does not exist in person

//Check if a property exists
var newPerson = {
  firstName: "Chikoo",
  lastName: "Fruit",
  age: 1000,
  address: {
    street: "1234 street",
    city: "Bombay",
    state: "MH",
    zipCode: 123456,
  },
};

if (newPerson.hasOwnProperty("address")) {
  if (newPerson.address.hasOwnProperty("city")) {
    gs.info("city : " + newPerson.address.city);
  }

  if (newPerson.address.hasOwnProperty("country")) {
    gs.info("country" + newPerson.address.country);
  } else {
    gs.warn("warning: No country defined in the address for this person ");
  }
} else {
  gs.warn("warning: No address for this person ");
}

//Looping through the keys:
//Access all keys in the object
var book = {
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

for (var key in book) {
  gs.info("key = " + key + " value = " + book[key]);
}

//Display the text representation of an object
var bookStr = JSON.stringify(book);
gs.info(bookStr);

//Display the text representation of an object with newlines and indentation
var formattedBookStr = JSON.stringify(book, null, 4);
gs.info(formattedBookStr);

//Converting text to an object
var bookCopy = JSON.parse(bookStr); //Convert text to object
gs.info("title= " + bookCopy.title); //Access the new object properties

//Create a list of objects
var bookList = [
  { title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling" },
  { title: "Moby Dick", author: "Herman Melville" },
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
];

var len = bookList.length;
gs.info("Last author = " + bookList[len].author); //undefined

for (var i = 0; i < len; i++) {
  var book = bookList[i];
  gs.info(i + " - Title " + book.title + " -Author: " + book.author);
}

//Display the array of Objects
var bookListStrFormat = JSON.stringify(bookList, null, 4);
gs.info(bookListStrFormat);

//Returning objects from functions

//Functions can only return one thing... why not make it an object?

function getScoreStats(scores) {
  var obj = {
    max: Math.max.apply(null, scores),
    min: Math.min.apply(null, scores),
    sum: scores.reduce((acc, current) => acc + current, 0),
  };
  obj.average = obj.sum / scores.length;
  return obj;
}

var answer = getScoreStats([98, 75, 78, 100, 86, 88, 93]);
gs.info("Sum = " + answer.sum);
gs.info("Average = " + answer.average);
gs.info(JSON.stringify(answer, null, 4));
