//Lab 4 Assignment: Use a Switch Statement to translate a string to multiple languages

var message = "Hello, World!";
var language = "English";
var espanolMsg = "¡Hola, Mundo!";
var francaisMsg = "Bonjour le monde!";
var nihongoMsg = "Konnichiwa Sekai!";

language = "Japanese";
switch (language) {
  case "Spanish":
    gs.info(espanolMsg);
    break;

  case "French":
    gs.info(francaisMsg);
    break;

  case "Japanese":
    gs.info(nihongoMsg);
    break;

  default:
    gs.info(message);
}
