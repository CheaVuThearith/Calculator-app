const numbers = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  zero: "0",
  decimal: ".",
};

const operators = {
  plus: "+",
  minus: "-",
  multiply: "*",
  divide: "/",
};

let percent = document.getElementById("percent");
let input = document.getElementById("input");
let equals = document.getElementById("equals");
let clear = document.getElementById("clear");
let clearall = document.getElementById("clearall");
let invert = document.getElementById("invert");

for (let number in numbers) {
  let element = document.getElementById(number);
  element.onclick = function () {
    input.value += numbers[number];
  };
}

for (let operator in operators) {
  let element = document.getElementById(operator);
  element.onclick = function () {
    if (Object.values(operators).includes(input.value.slice(-1))) {
      input.value = input.value.slice(0, -1);
    }
    input.value += operators[operator];
  };
}
function equals_btn() {
  if (Object.values(operators).includes(input.value.slice(-1))) {
    input.value = input.value.slice(0, -1);
  }
  input.value = eval(input.value);
}
percent.onclick = function () {
  input.value = input.value / 100;
};
clear.onclick = function () {
  input.value = input.value.slice(0, -1);
};
clearall.onclick = function () {
  input.value = "";
};
invert.onclick = function () {
  if (input.value == "") {
  } else {
    input.value = -input.value;
  }
};
input.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === "Enter") {
    equals_btn();
  }
  if (Object.values(operators).includes(key)) {
    if (Object.values(operators).includes(input.value.slice(-1)))
      input.value = input.value.slice(0, -1);
  } else if (key == "Backspace") {
  } else if (!Object.values(numbers).includes(key)) {
    event.preventDefault();
  }
});

// if (Object.values(operators).includes(input.value.slice(-2, -1)) && Object.values(operators).includes(input.value.slice(-1))) {
//     input.value = input.value.slice(0, -2) + input.value.slice(-1);
// }
// if (!Object.values(operators).includes(input.value.slice(-1)) && !Object.values(numbers).includes(input.value.slice(-1))) {
//     input.value = input.value.slice(0, -1);
// }
// if (input.value.slice(-2) === '..') {
//     input.value = input.value.slice(0, -1);
// }
