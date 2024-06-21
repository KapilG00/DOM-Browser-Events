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

const buttonElement = document.getElementById("button");

// --------------------- MOUSE EVENTS ------------------

// 1. Click

buttonElement.addEventListener("click", () => {
  alert("Button Clicked!!");
});

// NOTE: A single element can have multiple "Event Listener".

// e.g. ->

buttonElement.addEventListener("mouseover", () => {
  alert("Hover on Button!!");
});

const containerElement = document.getElementById("container");
