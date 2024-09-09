const inputTemp = document.getElementById("textbox");
const toKelvin = document.getElementById("toKelvin");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert() {
  if (toKelvin.checked) {
    temp = Number(inputTemp.value);
    console.log(temp);
    temp = temp + 273.15;
    result.textContent = `${temp}° is equal to ${temp}`;
  } else if (toFahrenheit.checked) {
  } else if (toCelsius.checked) {
  } else {
    result.innerHTML = "Select a unit vrooooo";
  }
}
