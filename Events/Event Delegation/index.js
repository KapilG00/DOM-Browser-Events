const colorPalletElement = document.getElementById("colorPallet");
const containerElement = document.getElementById("container");

/*
const cyanElement = document.getElementById("cyan");
const greenElement = document.getElementById("green");
const pinkElement = document.getElementById("pink");
const lightblueElement = document.getElementById("lightblue");
const orangeElement = document.getElementById("orange");

cyanElement.addEventListener("click", () => {
  colorPalletElement.style.background = "cyan";
});

greenElement.addEventListener("click", () => {
  colorPalletElement.style.background = "green";
});

pinkElement.addEventListener("click", () => {
  colorPalletElement.style.background = "pink";
});

lightblueElement.addEventListener("click", () => {
  colorPalletElement.style.background = "lightblue";
});

orangeElement.addEventListener("click", () => {
  colorPalletElement.style.background = "orange";
});
*/

// DISADVANTAGES:
// 1. Code doesn't look good.
// 2. Event listener take RAM space, so more listeners means more space occupied.
// 3. Repetition / non-maintainable code.

// Better Way: EVENT DELEGATION

containerElement.addEventListener("click", (event) => {
  const element = event.target;
  const color = element.id;

  colorPalletElement.style.background = color;
});

// !!!! Anomaly related to Event Delegation in Capturing Phase. !!!!

// It seems that the below will not work but the event propagation is so faster then the callback function execution.

// containerElement.addEventListener("click", (eventObj) => {
//   const element = eventObj.target;
//   const color = element.id;

//   colorPalletElement.style.background = color;
// }, true);
