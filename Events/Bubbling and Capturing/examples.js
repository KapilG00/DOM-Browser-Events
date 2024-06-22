const parentElement = document.getElementById("parent");
const grandParentElement = document.getElementById("grandparent");
const childElement = document.getElementById("child");

// QUESTION 1: click on child.

/*
childElement.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.BUBBLING_PHASE);
  console.log(event.CAPTURING_PHASE);
  console.log("Child Clicked");
});

grandParentElement.addEventListener(
  "click",
  (event) => {
    console.log("GrandParent Clicked");
  },
  false
);
*/

// QUESTION 2: click on Parent.

/*
childElement.addEventListener("click", (evenObj) => {
  console.log("Child Clicked");
});

grandParentElement.addEventListener(
  "click",
  (evenObj) => {
    console.log("GrandParent Clicked");
  },
  false
);
*/

// QUESTION 3:  click on Parent

/*
childElement.addEventListener("click", (evenObj) => {
  console.log("Child Clicked");
});

parentElement.addEventListener("click", () => {
  console.log("Parent Clicked");
});

grandParentElement.addEventListener(
  "click",
  (evenObj) => {
    console.log("GrandParent Clicked");
  },
  false
);
*/

// QUESTION 4:  click on GrandParent

/*
childElement.addEventListener("click", (evenObj) => {
  console.log("Child Clicked");
});

parentElement.addEventListener("click", () => {
  console.log("Parent Clicked");
});

grandParentElement.addEventListener(
  "click",
  (evenObj) => {
    console.log("GrandParent Clicked");
  },
  false
);
*/

// Question 5: click on Child

/*
childElement.addEventListener(
  "click",
  () => {
    console.log("Child Clicked");
  },
  true
);

parentElement.addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  true
);

grandParentElement.addEventListener(
  "click",
  () => {
    console.log("GrandParent Clicked");
  },
  true
);
*/

// Question 6: click on Parent

/*
childElement.addEventListener(
  "click",
  () => {
    console.log("Child Clicked");
  },
  true
);

parentElement.addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  true
);

grandParentElement.addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked");
  },
  true
);
*/

// Question 7: click on Child

/*
childElement.addEventListener(
  "click",
  () => {
    console.log("Child Clicked");
  },
  false
);

parentElement.addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  true
);

grandParentElement.addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked");
  },
  false
);
*/

// Question 8: click on Child

/*
childElement.addEventListener(
  "dblclick",
  () => {
    console.log("Child Clicked");
  },
  false
);

parentElement.addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  true
);

grandParentElement.addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked");
  },
  false
);
*/

// Question 9: click on Child

/*
childElement.addEventListener(
  "mouseover",
  () => {
    console.log("Child Clicked");
  },
  false
);

parentElement.addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  true
);

grandParentElement.addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked");
  },
  false
);
*/

// Question 10: click on Parent

let x = false;

grandParentElement.addEventListener(
  "click",
  () => {
    console.log("Grandparent clicked");
    console.log("x inside grandparent:", x);
  },
  x
);

parentElement.addEventListener(
  "click",
  () => {
    console.log("Parent clicked");
    console.log("x inside parent:", x);
    x = true;
  },
  x
);

console.log("x outside parent and grandparent:", x);
