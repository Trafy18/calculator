const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "/", "+/-", "x", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    // jika output memiliki %, rubah dengan '/100' sebelum evaluating
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "C") {
    output = " ";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
