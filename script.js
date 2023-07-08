
let randomTextGeneral = '';
let lowercaseLetters = [];
let uppercaseLetters = [];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let characters = '!\/\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

//Obteniendo referencias
const textoElement = document.getElementById('textPassword');
const rangeInput = document.getElementById('customRange2');
const uppercaseCheckbox = document.getElementById('flexSwitchUppercase');
const lowercaseCheckbox = document.getElementById('flexSwitchLowercase');
const numberCheckbox = document.getElementById('flexSwitchNumbers');
const symbolCheckbox = document.getElementById('flexSwitchSymbols');
const selectAll = document.getElementById('flexSwitchAll');
const rangeTooltip = document.getElementById('rangeTooltip');
const lengthInput = document.getElementById('lp-pg-password-length');

uppercaseCheckbox.addEventListener('change', generatePassword);
uppercaseCheckbox.addEventListener('change', handleUncheckedOptions);

lowercaseCheckbox.addEventListener('change', generatePassword);
lowercaseCheckbox.addEventListener('change', handleUncheckedOptions);

numberCheckbox.addEventListener('change', generatePassword);
numberCheckbox.addEventListener('change', handleUncheckedOptions);

symbolCheckbox.addEventListener('change', generatePassword);
symbolCheckbox.addEventListener('change', handleUncheckedOptions);

selectAll.addEventListener('change', selectionOption);

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

const length = rangeInput.value;

function addGeneral() {
  randomTextGeneral = '';
  for (let i = 0; i < length; i++) {
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
  text(randomTextGeneral);
}

function generatePassword() {
  randomTextGeneral = '';

  if (uppercaseCheckbox.checked && lowercaseCheckbox.checked && numberCheckbox.checked && symbolCheckbox.checked) {
    for (let i = 0; i < 30; i++) {
      let random = Math.random();
      if (random < 0.25) {
        randomTextGeneral += getRandomUppercaseLetter();
      } else if (random < 0.5) {
        randomTextGeneral += getRandomLowercaseLetter();
      } else if (random < 0.75) {
        randomTextGeneral += getRandomNumbers();
      } else {
        randomTextGeneral += getRandomCharacters();
      }
    }
  } else if (uppercaseCheckbox.checked && lowercaseCheckbox.checked && numberCheckbox.checked) {
    // Generar combinación de mayúsculas, minúsculas y números
    for (let i = 0; i < 30; i++) {
      let random = Math.random();
      if (random < 0.25) {
        randomTextGeneral += getRandomUppercaseLetter();
      } else if (random < 0.5) {
        randomTextGeneral += getRandomLowercaseLetter();
      } else {
        randomTextGeneral += getRandomNumbers();
      }
    }
  } else if (uppercaseCheckbox.checked && lowercaseCheckbox.checked && symbolCheckbox.checked) {
    // Generar combinación de mayúsculas, minúsculas y símbolos
    for (let i = 0; i < 30; i++) {
      let random = Math.random();
      if (random < 0.25) {
        randomTextGeneral += getRandomUppercaseLetter();
      } else if (random < 0.5) {
        randomTextGeneral += getRandomLowercaseLetter();
      } else {
        randomTextGeneral += getRandomCharacters();
      }
    }
  } else if (uppercaseCheckbox.checked && numberCheckbox.checked && symbolCheckbox.checked) {
    // Generar combinación de mayúsculas, números y symbolos
    for (let i = 0; i < 30; i++) {
      let random = Math.random();
      if (random < 0.25) {
        randomTextGeneral += getRandomUppercaseLetter();
      } else if (random < 0.5) {
        randomTextGeneral += getRandomNumbers();
      } else {
        randomTextGeneral += getRandomCharacters();
      }
    }
  } else if (lowercaseCheckbox.checked && numberCheckbox.checked && symbolCheckbox.checked) {
    // Generar combinación de minúsculas, números y símbolos
    for (let i = 0; i < 30; i++) {
      let random = Math.random();
      if (random < 0.25) {
        randomTextGeneral += getRandomLowercaseLetter();
      } else if (random < 0.5) {
        randomTextGeneral += getRandomNumbers();
      } else {
        randomTextGeneral += getRandomCharacters();
      }
    }
  } else if (uppercaseCheckbox.checked && lowercaseCheckbox.checked) {
    // Generar combinación de mayúsculas y minúsculas
    for (let i = 0; i < 30; i++) {
      let random = Math.random();
      if (random < 0.5) {
        randomTextGeneral += getRandomUppercaseLetter();
      } else {
        randomTextGeneral += getRandomLowercaseLetter();
      }
    }
  } else if (uppercaseCheckbox.checked && numberCheckbox.checked) {
    // Generar combinación de mayúsculas y números
    for (let i = 0; i < 30; i++) {
      let random = Math.random();
      if (random < 0.5) {
        randomTextGeneral += getRandomUppercaseLetter();
      } else {
        randomTextGeneral += getRandomNumbers();
      }
    }
  } else if (uppercaseCheckbox.checked && symbolCheckbox.checked) {
    // Generar combinación de mayúsculas y símbolos
    for (let i = 0; i < 30; i++) {
      let random = Math.random();
      if (random < 0.5) {
        randomTextGeneral += getRandomUppercaseLetter();
      } else {
        randomTextGeneral += getRandomCharacters();
      }
    }
  } else if (lowercaseCheckbox.checked && numberCheckbox.checked) {
    // Generar combinación de minúsculas y números
    for (let i = 0; i < 30; i++) {
      let random = Math.random();
      if (random < 0.5) {
        randomTextGeneral += getRandomLowercaseLetter();
      } else {
        randomTextGeneral += getRandomNumbers();
      }
    }
  } else if (lowercaseCheckbox.checked && symbolCheckbox.checked) {
    // Generar combinación de minúsculas y símbolos
    for (let i = 0; i < 30; i++) {
      let random = Math.random();
      if (random < 0.5) {
        randomTextGeneral += getRandomLowercaseLetter();
      } else {
        randomTextGeneral += getRandomCharacters();
      }
    }
  } else if (numberCheckbox.checked && symbolCheckbox.checked) {
    // Generar combinación de números y símbolos
    for (let i = 0; i < 30; i++) {
      let random = Math.random();
      if (random < 0.5) {
        randomTextGeneral += getRandomNumbers();
      } else {
        randomTextGeneral += getRandomCharacters();
      }
    }
  } else if (uppercaseCheckbox.checked) {
    // Generar solo mayúsculas
    for (let i = 0; i < 30; i++) {
      randomTextGeneral += getRandomUppercaseLetter();
    }
  } else if (lowercaseCheckbox.checked) {
    // Generar solo minúsculas
    for (let i = 0; i < 30; i++) {
      randomTextGeneral += getRandomLowercaseLetter();
    }
  } else if (numberCheckbox.checked) {
    // Generar solo números
    for (let i = 0; i < 30; i++) {
      randomTextGeneral += getRandomNumbers();
    }
  } else if (symbolCheckbox.checked) {
    // Generar solo símbolos
    for (let i = 0; i < 30; i++) {
      randomTextGeneral += getRandomCharacters();
    }
  } else {
    addGeneral();
  }

  text(randomTextGeneral);
}

function selectionOption() {
  if (selectAll.checked) {
    uppercaseCheckbox.checked = true;
    uppercaseCheckbox.disabled = true;

    lowercaseCheckbox.checked = true;
    lowercaseCheckbox.disabled = true;

    numberCheckbox.checked = true;
    numberCheckbox.disabled = true;

    symbolCheckbox.checked = true;
    symbolCheckbox.disabled = true;
  } else if (!selectAll.checked) {
    uppercaseCheckbox.checked = true;
    uppercaseCheckbox.disabled = false;

    lowercaseCheckbox.checked = true;
    lowercaseCheckbox.disabled = false;

    numberCheckbox.checked = true;
    numberCheckbox.disabled = false;

    symbolCheckbox.checked = true;
    symbolCheckbox.disabled = false;
  } else {
    uppercaseCheckbox.checked = false;
    uppercaseCheckbox.disabled = false;

    lowercaseCheckbox.checked = false;
    lowercaseCheckbox.disabled = false;

    numberCheckbox.checked = false;
    numberCheckbox.disabled = false;

    symbolCheckbox.checked = false;
    symbolCheckbox.disabled = false;
  }
}

function handleUncheckedOptions() {
  if (!uppercaseCheckbox.checked && !lowercaseCheckbox.checked && !numberCheckbox.checked && !symbolCheckbox.checked) {
    selectAll.checked = true;

    uppercaseCheckbox.checked = true;
    uppercaseCheckbox.disabled = true;

    lowercaseCheckbox.checked = true;
    lowercaseCheckbox.disabled = true;

    numberCheckbox.checked = true;
    numberCheckbox.disabled = true;

    symbolCheckbox.checked = true;
    symbolCheckbox.disabled = true;
  }
}

rangeInput.addEventListener('input', function() {
  const value = rangeInput.value;
  rangeTooltip.textContent = value;
  lengthInput.value = rangeInput.value;
  rangeInput.value = lengthInput.value;
});

rangeInput.addEventListener('click', function () {
  generatePassword();
});

document.addEventListener('DOMContentLoaded', function () {
  selectAll.checked = true;
  selectionOption();
  addGeneral();
});
