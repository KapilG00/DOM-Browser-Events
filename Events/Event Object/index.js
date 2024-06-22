const buttonElement = document.getElementById("button");

// addEventListener will add a listener to the element when a particular event happens.

// addEventListener will execute the callbackFunction with the "Event" object.

// It is upto the Developer if he/she agrees to consume the "Event" object.

/*
  Both of the following examples are correct:

  buttonElement.addEventListener("click", () => {})
  buttonElement.addEventListener("click", (event) => {})
*/

//  ---------------- IMPORTANT POINTS ABOUT EVENT OBJECT -------------
// 1. target: Event Object knows about the element due to whom it was created.
// 2. type: type of event (keyboard, click)

buttonElement.addEventListener("click", (event) => {
  console.log(event);
});
