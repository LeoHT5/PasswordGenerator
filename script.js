
let lowercaseLetters = [];
let uppercaseLetters = [];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let characters = '!\/\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

//Obteniendo referencias
const textoElement = document.getElementById('textPassword');
const rangeInput = document.getElementById('customRange2');

function getRandomLowercaseLetter() {
  const randomNumber = Math.floor((Math.random() * 26).toFixed(15)); // Genera un número aleatorio entre 0 y 25
  const asciiCode = 97 + randomNumber; // Suma el número aleatorio al código ASCII de 'a'
  const randomLetter = String.fromCharCode(asciiCode); // Obtiene la letra correspondiente al código ASCII

  return randomLetter;
}

function getRandomUppercaseLetter() {
  const randomNumber = Math.floor((Math.random() * 26).toFixed(15));
  const ascciCode = 65 + randomNumber;
  const randomLetter = String.fromCharCode(ascciCode);

  return randomLetter;
}

function getRandomNumbers() {
  const randomNumber = Math.floor(Math.random() * numbers.length);
  const randomArrayNumber = numbers[randomNumber];

  return randomArrayNumber;
}

function getRandomCharacters() {
  const randomCharacters = Math.floor(Math.random() * characters.length);
  const randomArrayCharacters = characters[randomCharacters];

  return randomArrayCharacters;
}

function text(x) {
  textoElement.value = x;
}

function addGeneral() {
  let randomTextGeneral = '';
  for (let i = 0; i < 30; i++) {
    const randomType = Math.floor(Math.random() * 4);
    switch (randomType) {
      case 0:
        randomTextGeneral += getRandomLowercaseLetter();
        break;
      case 1:
        randomTextGeneral += getRandomUppercaseLetter();
        break;
      case 2:
        randomTextGeneral += getRandomNumbers();
        break;
      case 3:
        randomTextGeneral += getRandomCharacters();
        break;
    }
  }
  return text(randomTextGeneral);
}

addGeneral();
rangeInput.addEventListener('click', function() {
  addGeneral();
});

function addUpperCase() {
  let textAddUpperCase = '';
  for (let i = 0; i < 30; i++) {
    textAddUpperCase += getRandomUppercaseLetter();
  }
  return text(textAddUpperCase)
}

function addLoweCase() {
  let textAddLowerCase = '';
  for (let i = 0; i < 30; i++) {
    textAddLowerCase += getRandomLowercaseLetter();
  }
  return text(textAddLowerCase)
}

function addNumbers() {
  let textAddNumbers = '';
  for (let i = 0; i < 30; i++) {
    textAddNumbers += getRandomNumbers();
  }
  return text(textAddNumbers)
}

function addCharacters() {
  let textAddCharacters = '';
  for (let i = 0; i < 30; i++) {
    textAddCharacters += getRandomCharacters();
  }
  return text(textAddCharacters)
}
