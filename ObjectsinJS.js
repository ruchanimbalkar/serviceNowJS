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
