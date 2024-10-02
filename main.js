const input = document.querySelector(".random-pass");
const strength = document.querySelector(".strength");
const reload = document.querySelector(".relode");
const copy = document.querySelector(".copyBtn");
const length = document.querySelector(".length");
const minus = document.querySelector(".minus");
const slider = document.querySelector(".styled-range");
const plus = document.querySelector(".plus");
const upper = document.querySelector(".upperLetter");
const lower = document.querySelector(".lowerLetter");
const numbers = document.querySelector(".numbers");
const symbols = document.querySelector(".symbols");

let char = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let special = "(!@#$%^&*)";
let upperChar = char.toUpperCase();

length.textContent = slider.value;

//Generates Random Lowercase letters
function randomCharFunc() {
  let randomChar = "";
  let charRandom = Math.floor(Math.random() * char.length);
  return (randomChar += char[charRandom]);
}

//Generates Random Uppercase letters
function randomUpperCharFunc() {
  let randomUpperChar = "";
  let charUpperRandom = Math.floor(Math.random() * char.length);
  return (randomUpperChar += upperChar[charUpperRandom]);
}

//Generates Random Number
function randomNumFunc() {
  let randomNum = "";
  let numRandom = Math.floor(Math.random() * num.length);
  return (randomNum += num[numRandom]);
}

//Generates Random Symbols
function randomspecialFunc() {
  let randomspecial = "";
  let specialRandom = Math.floor(Math.random() * special.length);
  return (randomspecial += special[specialRandom]);
}

//generates random mix of uppercase and lowercase letters
function randomUpperLowerChar() {
  let upperLowerchar = "";
  const upperLower = Math.random() < 0.5;
  if (upperLower) {
    const randomUpperLower = Math.floor(Math.random() * char.length);
    upperLowerchar += char[randomUpperLower];
  } else {
    const randomUpperLower = Math.floor(Math.random() * char.length);
    upperLowerchar += upperChar[randomUpperLower];
  }
}

//generates random mix of lowercase letters and numbers
function randomCharNum() {
  let charNumRandom = "";
  const charNum = Math.random() < 0.5;
  if (charNum) {
    const randomCharNum = Math.floor(Math.random() * char.length);
    charNumRandom += char[randomCharNum];
  } else {
    const randomCharNum = Math.floor(Math.random() * num.length);
    charNumRandom += num[randomCharNum];
  }
  return charNumRandom;
}

//generates random mix of symbols and numbers
function randomSpecialNum() {
  let numSpecialRandom = "";
  const specialNum = Math.random() < 0.5;
  if (specialNum) {
    const specialNumRandom = Math.floor(Math.random() * num.length);
    numSpecialRandom += num[specialNumRandom];
  } else {
    const specialNumRandom = Math.floor(Math.random() * special.length);
    numSpecialRandom += special[specialNumRandom];
  }
  return numSpecialRandom;
}

//generates random mix of lowercase letters and symbols
function randomSpecialChar() {
  let charSpecialRandom = "";
  const specialChar = Math.random() < 0.5;
  if (specialChar) {
    const specialCharRandom = Math.floor(Math.random() * char.length);
    charSpecialRandom += char[specialCharRandom];
  } else {
    const specialCharRandom = Math.floor(Math.random() * special.length);
    charSpecialRandom += special[specialCharRandom];
  }
  return charSpecialRandom;
}

//generates random mix of lowercase letters and numbers and symbols
function randomSpecialCharNum() {
  let charNumSpecialRandom = "";
  const specialCharNum = Math.random() < 0.3;
  if (specialCharNum) {
    const specialCharNumRandom = Math.floor(Math.random() * char.length);
    charNumSpecialRandom += char[specialCharNumRandom];
  }
  if (specialCharNum) {
    const specialCharNumRandom = Math.floor(Math.random() * special.length);
    charNumSpecialRandom += special[specialCharNumRandom];
  } else {
    const specialCharNumRandom = Math.floor(Math.random() * num.length);
    charNumSpecialRandom += num[specialCharNumRandom];
  }
  return charNumSpecialRandom;
}

//generates random mix of lowercase letters, numbers, symbols, uppercase letters
function randomUpperSpecialCharNum() {
  let charUpperNumSpecialRandom = "";
  const specialCharNum = Math.random() < 0.25;
  if (specialCharNum) {
    const specialCharNumRandom = Math.floor(Math.random() * char.length);
    charUpperNumSpecialRandom += char[specialCharNumRandom];
  }
  if (specialCharNum) {
    const specialCharNumRandom = Math.floor(Math.random() * special.length);
    charUpperNumSpecialRandom += special[specialCharNumRandom];
  }
  if (specialCharNum) {
    const specialCharNumRandom = Math.floor(Math.random() * num.length);
    charUpperNumSpecialRandom += num[specialCharNumRandom];
  } else {
    const specialCharNumRandom = Math.floor(Math.random() * num.length);
    charUpperNumSpecialRandom += upper[specialCharNumRandom];
  }
  return charUpperNumSpecialRandom;
}

slider.addEventListener("input", () => {
  length.textContent = slider.value;
});

plus.addEventListener("click", () => {
  let currentValue = Number(slider.value);
  currentValue += 1;
  slider.value = currentValue;
  length.textContent = currentValue;
});

minus.addEventListener("click", () => {
  let currentValue = Number(slider.value);
  if (currentValue === 0) {
    length.textContent = 0;
  } else {
    currentValue -= 1;
    slider.value = currentValue;
    length.textContent = currentValue;
  }
});

function generateRandomString() {
  let newRandom = [];
  for (let i = 0; i < slider.value; i++) {
    if (lower.checked && !numbers.checked && !symbols.checked) {
      newRandom.push(randomCharFunc());
    } else if (!lower.checked && numbers.checked && !symbols.checked) {
      newRandom.push(randomNumFunc());
    } else if (!lower.checked && !numbers.checked && symbols.checked) {
      newRandom.push(randomspecialFunc());
    } else if (lower.checked && numbers.checked && !symbols.checked) {
      newRandom.push(randomCharNum());
    } else if (lower.checked && !numbers.checked && symbols.checked) {
      newRandom.push(randomSpecialChar());
    } else if (!lower.checked && numbers.checked && symbols.checked) {
      newRandom.push(randomSpecialNum());
    } else if (lower.checked && numbers.checked && symbols.checked) {
      newRandom.push(randomSpecialCharNum());
    }
  }
  if (input.value.length <= 4) {
    strength.style.backgroundColor = "red";
    strength.style.color = "black";
    strength.textContent = "Very weak";
  } else if (input.value.length >= 5 && input.value.length <= 8) {
    strength.style.backgroundColor = "#fe8d01";
    strength.style.color = "black";
    strength.textContent = "Weak";
  } else if (input.value.length >= 9 && input.value.length <= 10) {
    strength.style.backgroundColor = "#ffb668";
    strength.style.color = "black";
    strength.textContent = "Good";
  } else if (input.value.length >= 11 && input.value.length <= 14) {
    strength.style.backgroundColor = "lightgreen";
    strength.style.color = "black";
    strength.textContent = "Strong";
  } else if (input.value.length > 14) {
    strength.style.backgroundColor = "#9ae437";
    strength.style.color = "black";
    strength.textContent = "Very Strong";
  }

  input.value = newRandom.join("");
}

function generateRandomStringInitial() {
  let newRandom = [];
  for (let i = 0; i < slider.value; i++) {
    if (lower.checked && numbers.checked && symbols.checked) {
      newRandom.push(randomSpecialCharNum());
    }
  }

  input.value = newRandom.join("");
}

slider.addEventListener("input", generateRandomString);
plus.addEventListener("click", generateRandomString);
minus.addEventListener("click", generateRandomString);
reload.addEventListener("click", generateRandomString);
input.addEventListener("click", generateRandomStringInitial());
