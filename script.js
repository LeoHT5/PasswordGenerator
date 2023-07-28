
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
const lengthInput = document.getElementById('lp-pg-password-length');
const passwordGenerator = document.getElementById("button-password-generator");
const passwordCopy = document.getElementById("button-password-copy");

let passwordLength = rangeInput.value;

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
  const randomNumber = Math.floor((Math.random() * 26).toFixed(15));
  const asciiCode = 97 + randomNumber;
  const randomLetter = String.fromCharCode(asciiCode);

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
  randomTextGeneral = '';
  for (let i = 0; i < passwordLength; i++) {
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
    for (let i = 0; i < passwordLength; i++) {
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
    for (let i = 0; i < passwordLength; i++) {
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
    for (let i = 0; i < passwordLength; i++) {
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
    for (let i = 0; i < passwordLength; i++) {
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
    for (let i = 0; i < passwordLength; i++) {
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
    for (let i = 0; i < passwordLength; i++) {
      let random = Math.random();
      if (random < 0.5) {
        randomTextGeneral += getRandomUppercaseLetter();
      } else {
        randomTextGeneral += getRandomLowercaseLetter();
      }
    }
  } else if (uppercaseCheckbox.checked && numberCheckbox.checked) {
    // Generar combinación de mayúsculas y números
    for (let i = 0; i < passwordLength; i++) {
      let random = Math.random();
      if (random < 0.5) {
        randomTextGeneral += getRandomUppercaseLetter();
      } else {
        randomTextGeneral += getRandomNumbers();
      }
    }
  } else if (uppercaseCheckbox.checked && symbolCheckbox.checked) {
    // Generar combinación de mayúsculas y símbolos
    for (let i = 0; i < passwordLength; i++) {
      let random = Math.random();
      if (random < 0.5) {
        randomTextGeneral += getRandomUppercaseLetter();
      } else {
        randomTextGeneral += getRandomCharacters();
      }
    }
  } else if (lowercaseCheckbox.checked && numberCheckbox.checked) {
    // Generar combinación de minúsculas y números
    for (let i = 0; i < passwordLength; i++) {
      let random = Math.random();
      if (random < 0.5) {
        randomTextGeneral += getRandomLowercaseLetter();
      } else {
        randomTextGeneral += getRandomNumbers();
      }
    }
  } else if (lowercaseCheckbox.checked && symbolCheckbox.checked) {
    // Generar combinación de minúsculas y símbolos
    for (let i = 0; i < passwordLength; i++) {
      let random = Math.random();
      if (random < 0.5) {
        randomTextGeneral += getRandomLowercaseLetter();
      } else {
        randomTextGeneral += getRandomCharacters();
      }
    }
  } else if (numberCheckbox.checked && symbolCheckbox.checked) {
    // Generar combinación de números y símbolos
    for (let i = 0; i < passwordLength; i++) {
      let random = Math.random();
      if (random < 0.5) {
        randomTextGeneral += getRandomNumbers();
      } else {
        randomTextGeneral += getRandomCharacters();
      }
    }
  } else if (uppercaseCheckbox.checked) {
    // Generar solo mayúsculas
    for (let i = 0; i < passwordLength; i++) {
      randomTextGeneral += getRandomUppercaseLetter();
    }
  } else if (lowercaseCheckbox.checked) {
    // Generar solo minúsculas
    for (let i = 0; i < passwordLength; i++) {
      randomTextGeneral += getRandomLowercaseLetter();
    }
  } else if (numberCheckbox.checked) {
    // Generar solo números
    for (let i = 0; i < passwordLength; i++) {
      randomTextGeneral += getRandomNumbers();
    }
  } else if (symbolCheckbox.checked) {
    // Generar solo símbolos
    for (let i = 0; i < passwordLength; i++) {
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

function limitLengthInputValue() {
  let valueLength = parseInt(lengthInput.value);

  if (valueLength > 50) {
    valueLength = 50;
  }

  if (valueLength < 1) {
    valueLength = 1;
  }

  lengthInput.value = valueLength;
  rangeInput.value = valueLength;
  passwordLength = valueLength;

  const valueHover = rangeInput.value;
  lengthInput.textContent = valueHover;
  generatePassword();
}

function updateLength() {
  const valueHover = rangeInput.value;
  lengthInput.textContent = valueHover;

  passwordLength = parseInt(valueHover);
  lengthInput.value = passwordLength;
}

function copyPassword() {

  let targetInput = document.querySelector(
    document.getElementById("button-password-copy").getAttribute("data-clipboard-target")
  );

  // Seleccionar el texto dentro del input
  targetInput.select();
  targetInput.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copiar el texto seleccionado al portapapeles
  document.execCommand("copy");

  // Deseleccionar el texto
  window.getSelection().removeAllRanges();
}

function initialize() {
  const valueHover = rangeInput.value;
  const valueLength = rangeInput.value;
  lengthInput.textContent = valueHover;
  lengthInput.value = valueLength;

  selectAll.checked = true;
  selectionOption();
  addGeneral();
}

//Genera la contraseña con el rango del slider
rangeInput.addEventListener('input', function () {
  updateLength();
});

//Genera la contraseña con el rango del input text
lengthInput.addEventListener('input', function () {
  limitLengthInputValue();
});

lengthInput.addEventListener('blur', function () {
  limitLengthInputValue();
});

rangeInput.addEventListener('click', function () {
  generatePassword();
});

passwordCopy.addEventListener('click', function () {
  copyPassword();
})

passwordGenerator.addEventListener('click', function () {
  generatePassword();
  // document.getElementById("button-password-generator").blur();
})

document.addEventListener('DOMContentLoaded', function () {
  initialize();
});
