const parentElement = document.getElementById("parent");
const grandParentElement = document.getElementById("grandparent");
const childElement = document.getElementById("child");

// childElement.addEventListener("click", () => {
//   console.log("child Clicked");
// });

// parentElement.addEventListener("click", () => {
//   console.log("parent Clicked");
// });

// grandParentElement.addEventListener("click", () => {
//   console.log("grandParent Clicked");
// });

/*
  PHASES OF AN EVENT:

  1. Capturing Phase -> An event will be originated from the "window".
     Its aim would be to find the TARGET/ELEMENT who clicked (or any action).

    eventObj = {
        type: click,
        target: null 
    }

  2. Targeting Phase -> The time at which the event object is literally on the culprit element i.e. target element.
     In Targeting Phase, the event object target is changed from null to targetElement.

    eventObj = {
        type: click,
        target: targetElement 
    }


  3. Bubbling Phase -> A event after the targeting phase want to die, so it will travel up to the 
     window element and die there.

     In Bubbling Phase, it is 100% guarantee about the culprit i.e. target element.

    eventObj = {
        type: click,
        target: targetElement 
    } 
*/

// AIM OF AN EVENT OBJECT:
// 1. Find/Capture the culprit/target.
// 2. To Die.

// DEFAULT is "false".

// To add EventListeners at Bubbling Phase.
childElement.addEventListener("click", (event) => {
  console.log("Child Clicked");
});

parentElement.addEventListener("click", (event) => {
  console.log("Parent Clicked");
});

grandParentElement.addEventListener(
  "click",
  (event) => {
    console.log("GrandParent Clicked");
  },
  false
);

// To add EventListeners at Capturing Phase.
childElement.addEventListener(
  "click",
  (evenObj) => {
    console.log("child Clicked");
  },
  true
);
