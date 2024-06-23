const headingElement = document.getElementById("heading");

function clickHandler() {
  console.log("Heading element clicked");
}

function mouseEnterHandler() {
  console.log("Mouse enter handler");
}

headingElement.addEventListener("click", clickHandler); // abc@1234
// headingElement.addEventListener("mouseenter", mouseEnterHandler);

// Implement headingElement.removeEventListener("click", clickHandler);

// Hacky way to remove just for demonstration.
// setTimeout(() => {
//   headingElement.removeEventListener("click", clickHandler); // abc@1234
//   //   headingElement.removeEventListener("mouseenter", mouseEnterHandler);
// }, 5000);

// NOTE: We need to give same function (Address wise) to both addEventListener and removeEventListener
//       that why I have not taken the arrow function.

// Real use of "beforeunload" event.

document.addEventListener("beforeunload", (event) => {
  // cleanup, ......
  event.preventDefault();
  headingElement.removeEventListener("click", clickHandler); // abc@1234

  // headingElement.removeEventListener("mouseenter", mouseEnterHandler);
});
