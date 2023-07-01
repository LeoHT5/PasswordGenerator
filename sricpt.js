
let lowercaseLetters = [];
let uppercaseLetters = [];
let numbers = [0,1,2,3,4,5,6,7,8,9];
let characters = '!\/\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function getRandomLowercaseLetter() {
    const randomNumber = Math.floor((Math.random() * 26).toFixed(15)); // Genera un número aleatorio entre 0 y 25
    const asciiCode = 97 + randomNumber; // Suma el número aleatorio al código ASCII de 'a'
    const randomLetter = String.fromCharCode(asciiCode); // Obtiene la letra correspondiente al código ASCII
    
    return randomLetter;
  }

function getRandomUppercaseLetter(){
    const randomNumber = Math.floor((Math.random() * 26).toFixed(15));
    const ascciCode = 65 + randomNumber;
    const randomLetter = String.fromCharCode(ascciCode);

    return randomLetter;
}

function getRandomNumber(){
    const randomNumber = Math.floor(Math.random() * numbers.length);
    const randomArrayNumber = numbers[randomNumber];

    return randomArrayNumber;
}

function getRandomCharacters(){
    const randomCharacters = Math.floor(Math.random() * characters.length);
    const randomArrayCharacters = characters[randomCharacters];

    return randomArrayCharacters;
}

  const randomNumber = getRandomNumber();
  const randomLowerLetter = getRandomLowercaseLetter();
  const randomUpperLetter = getRandomUppercaseLetter();
  const randomCharacters = getRandomCharacters();
  console.log(randomLowerLetter);
  console.log(randomUpperLetter);
  console.log(randomNumber);
  console.log(randomCharacters)
