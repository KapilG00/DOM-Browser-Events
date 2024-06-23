// 1. DOMContentLoaded: It is an event which is launched only when the DOM tree creation is 100% done.

document.addEventListener("DOMContentLoaded", () => {
  const headingElement = document.getElementById("heading");
  headingElement.style.background = "pink";
});

// when DOMContentLoaded happens it is a guarantee that DOM tree is fully created (100%).
// It is not a guarantee that the "image" will be loaded completely.

// 2. Load: When external resources (images, videos, audio, css, etc) are loaded 100% then this event will be launched.

document.addEventListener("load", () => {
  // Play with audio, video or image....
});

// 3. beforeUnload -> It works when the document is about to be take off/unloaded.

document.addEventListener("beforeunload", () => {
  // Cleanup
  // Remove event listeners
  // Remove timers..
  // document.removeEventListener("eventName", funcName)
});
