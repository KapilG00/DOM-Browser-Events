// ----------- Select/Reading an element ---------

// 1. getElementById. (VERY VERY FAST )
headingElement = document.getElementById("heading");
headingElement.style.color = "red";
headingElement.style.background = "lightblue";
headingElement.innerText = "DOM manipulation Enjoyer!!";
console.log("headingElement:", headingElement);
console.dir(headingElement);

// 2. getElementsByTagName
const headingElementList = document.getElementsByTagName("h1");
console.log("headingElementList:", headingElementList);

// 3. getElementsByClassName
const cricketClassElement = document.getElementsByClassName("cricket");
console.log("cricketClassElement:", cricketClassElement);

// CSS SELECTORS  (VERY VERY SLOW)

// 4. querySelector -> It takes a css selector and gives back single top-most element.
// const divCOntainerElement = document.querySelector("body > div")
const divContainerElement1 = document.querySelector("#container");
console.log("divContainerElement1:", divContainerElement1);
console.dir(divContainerElement1);

// 5. querySelectorAll ->  It takes a css selector and gives back list of elements.
const divListContainerElement = document.querySelectorAll("body > div");
console.log("divListContainerElement:", divListContainerElement);

// ----------- Editing (Update) an element ------------

const divContainerElement2 = document.getElementById("container");
console.dir(divContainerElement2);
console.log("divContainerElement2:", divContainerElement2);

// -------- HANDLE TEXT --------

// 1. innerHtml ->  DANGEROUS; DO NOT USE THIS DIRECTLY.
divContainerElement2.innerHTML = `<h1><u><i>Hello I am a paragraph for Cricket</i></u><h1>`;

// 2. innerText -> The format is preserved.
divContainerElement2.innerText = `Hello I am a paragraph for Cricket
2nd line
3rd line    
4th line
`;

// 3. textContent -> The format is not preserved.
divContainerElement2.textContent = `Hello I am a paragraph for Cricket
2nd line
3rd line
4th line
`;

// ----- HANDLE STYLES -----

// 4. style
divContainerElement2.style.backgroundColor = "pink";

// 5. className or classList -> Element class
divContainerElement2.classList.add("red");
// divContainerElement2.className = "cricket green";

// 6. id -> Element id
// divContainerElement2.id = "asparagus";

//  ------------- Deleting an element ---------------

let containerElement = document.getElementById("container");
// containerElement = null; // This is just changing the reference of containerElement.
// containerElement.remove();

// ------------ Creating an element ---------------

/*
  STEPS:
  1. Create the element.
  2. Edit the element.
  3. Attach the element to the DOM.
*/

// Step 1:
const divContainerNewElement = document.createElement("div");

// Step 2:
divContainerNewElement.innerText = `Hey there, I am newly created DIV`;
divContainerNewElement.classList.add("red");
divContainerNewElement.style.background = "lightgreen";

// Step 3:
const bodyElement = document.body;
// console.log("bodyElement:", bodyElement, typeof bodyElement);
// bodyElement.append(divContainerNewElement);

// Ways of insertion of an element inside DOM.
const divContainer = document.getElementById("container");
// divContainer.append(divContainerNewElement);
divContainer.prepend(divContainerNewElement);
// divContainer.before(divContainerNewElement);
// divContainer.after(divContainerNewElement);

// QUESTION: We have to add people inside the list.

const listElement1 = document.getElementById("list");

// WAY 1: append
const shreyasElement = document.createElement("li"); // <li></li>
shreyasElement.innerText = "Shreyas"; // <li>Shreyas</li>

const anirudhElement = document.createElement("li"); // <li></li>
anirudhElement.innerText = "Anirudh"; // <li>Anirudh</li>

listElement1.append(shreyasElement);
listElement1.append(anirudhElement);

// WAY2: innerHtml (Not a recommended way to do using innerHtml)
console.dir(listElement1);
// listElement1.innerHTML += `<li>Shreyas</li>\n` + `<li>Anirudh</li>\n`;

// --------------------- WAYS OF INSERTION ----------------
/*

const listElement2 = document.getElementById("list");

// 1. APPEND 
const zebraStudentElement = document.createElement("li")
zebraStudentElement.innerText = "Last element of a list"

listElement2.append(zebraStudentElement);


// 2. Prepend
const zeroStudentElement = document.createElement("li")
zeroStudentElement.innerText = "First element of a list"

listElement2.prepend(zeroStudentElement);


// 3. After
const footerElement = document.createElement("footer")
footerElement.innerText = "End of the list";

listElement2.after(footerElement)

// 4. Before
const headerElement = document.createElement("header")
headerElement.innerText = "Start of the list";

listElement2.before(headerElement)

*/

// TODO: READ ABOUT "insertAdjacentHTML"
// https://javascript.info/modifying-document

// ----------------- Performance -------------------

// PROBLEM STATEMENT:

const listElement3 = document.getElementById("list");

const studentList = [
  "Leanne Graham",
  "Ervin Howell",
  "Clementine Bauch",
  "Patricia Lebsack",
  "Chelsey Dietrich",
  "Mrs. Dennis Schulist",
  "Kurtis Weissnat",
  "Nicholas Runolfsdottir V",
  "Glenna Reichert",
  "Clementina DuBuque",
];

for (let i = 0; i < studentList.length; i++) {
  const studentName = studentList[i];
  const studentElement = document.createElement("li");
  studentElement.innerText = studentName;
  listElement3.append(studentElement);
}

console.log("listElement3:", listElement3);

/*
ISSUE: Flaw is that we are changing the DOM tree 10 times.
       There will be "Reflow" and "Repaint" For 10 Times (which is VV EXPENSIVE).
*/

// SOLUTION: FRAGMENTS

const fakeFragmentNode = new DocumentFragment();

for (let i = 0; i < studentList.length; i++) {
  const studentName = studentList[i];
  const studentElement = document.createElement("li");
  studentElement.innerText = studentName;
  fakeFragmentNode.append(studentElement);
}

listElement3.append(fakeFragmentNode);

console.log("listElement3:", listElement3);

// We are doing expensive stuff only 1 TIme
