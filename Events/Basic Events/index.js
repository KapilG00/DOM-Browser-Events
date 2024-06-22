// ANY THING / ANY ACTION in the browser is an "EVENT".

/*
    What do we do in the Browser? 

    Click, Double CLick, Scroll, Hover, Changing the screen size, etc. 

    Every ACTION is nothing but an "Event" of it's own type.

    // Role of the Browser.

    USER ----> ACTION ---> BROWSER ----> EVENT(type)---> TAB(Website)

    Any action happens it creates an "EVENT" in the browser and send it to the website.

    Any "EVENT" that is created by browser is "broadcasted" to all the components including JavaScript.
*/

// --------------------- MOUSE EVENTS ------------------

const buttonElement = document.getElementById("button");

// 1. Click:

buttonElement.addEventListener("click", () => {
  alert("Button Clicked!!");
});

// NOTE: A single element can have multiple "Event Listener".

// e.g. ->

// buttonElement.addEventListener("mouseover", () => {
//   alert("Hover on Button!!");
// });

const containerElement = document.getElementById("container");

// 2. Mouse Over:

containerElement.addEventListener("mouseover", () => {
  containerElement.style.background = "purple";
});

// 3. Mouse Out:

containerElement.addEventListener("mouseout", () => {
  containerElement.style.background = "green";
});

containerElement.addEventListener("click", () => {
  containerElement.style.background = "pink";
  containerElement.style.borderRadius = "10px";
});

// 4. Double Click

containerElement.addEventListener("dblclick", () => {
  containerElement.style.background = "orange";
  containerElement.style.borderRadius = "5px";
});

buttonElement.addEventListener("mouseover", () => {
  const headingElement = document.getElementById("heading");
  headingElement.innerText = "Heading text change using mouse hovering";
});

// ----------------------- KEYBOARD EVENTS ---------------------

const inputBoxElement = document.getElementById("inputBox");

// 1. KEY DOWN

inputBoxElement.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === "r") {
    inputBoxElement.style.background = "red";
  } else if (key === "g") {
    inputBoxElement.style.background = "green";
  } else {
    inputBoxElement.style.background = "pink";
  }
});

// 2. KEY UP

inputBoxElement.addEventListener("keyup", (event) => {
  const key = event.key;

  if (key === "r") {
    inputBoxElement.style.background = "black";
  } else if (key === "g") {
    inputBoxElement.style.background = "gold";
  } else {
    inputBoxElement.style.background = "grey";
  }
});

// 3. KEY PRESSED

inputBoxElement.addEventListener("keypress", (event) => {
  const key = event.key;

  if (key === "r") {
    inputBoxElement.style.borderRadius = "10px";
  } else if (key === "g") {
    inputBoxElement.style.borderRadius = "20px";
  } else {
    inputBoxElement.style.borderRadius = "30px";
  }
});

// ------------------ WINDOW EVENT -------------------

window.addEventListener("resize", (event) => {
  console.log("Resize of window!!");
});

// PRACTICE MORE EVENTS....
