var increment = document.querySelector(".increment");
var decrement = document.querySelector(".decrement");
var reset = document.querySelector(".reset");

var numberText = document.querySelector("h1");
var number = 0;

increment.addEventListener("click", function () {
  number++;
  numberText.textContent = number;
});

decrement.addEventListener("click", function () {
  number--;
  numberText.textContent = number;
});

reset.addEventListener("click", function () {
  number = 0;
  numberText.textContent = number;
});
