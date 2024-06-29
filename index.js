//PROGRAM PART
const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
    console.log(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function squreroot() {
  display.value = Math.sqrt(display.value);
}
function pi() {
  display.value = Math.PI;
}

function factorial() {
  let z = display.value;
  let fact = 1;
  for (i = z; i > 0; i--) {
    fact = fact * i;
  }
  display.value = fact;
}

function evalue() {
  display.value = Math.E;
}
