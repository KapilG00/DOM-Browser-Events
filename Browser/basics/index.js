// Things we have noticed.
// 1. when we have more tabs on chrome, it takes more space in RAM.
// 2. RAM only stores KEY-VALUE pairs (RAM likes to store OBJECTS).

// We know that when we create a new TAB a new WINDOW (global object) is created.

// A BROWSER TAB CONSISTS of;
/*
  1. DOM: Document object model (responsible for the view / html)
  2. JS: Responsible for logic (math and functions).
  3. BOM: Browser Object model (It is collection of functions provided by the browser like localStorage, etc).
*/

//----------------- DOM TREE --------------------

/*
  Tree Representation of your HTML.
  DOM VISUALIZER: https://bioub.github.io/dom-visualizer/.

  Question: Why tree format of DOM ? 
  ANSWER: So that we can store relationships.

  TYPE OF NODE: 
  1. Element Node - (h1, li, ul, body, HTML, meta, Head)
  2. Text Node - (Real Text and blank Space)
  3. Comment Node: - (Comments inside the HTML)
*/

// CRUD -> Create, Read, Update, Delete
