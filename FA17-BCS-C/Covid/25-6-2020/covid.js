let start = Date.now();
// console.log(start);
function printMessage() {
  console.log("Hello from Covid Lecture");
}
function demo() {
  //   let loaded = Date.now();
  //   console.log(loaded - start);
  var btn = document.getElementById("btn");
  //   btn.onclick = printMessage;
}
// demo(); // page is not loaded yet
// setTimeout(demo, 1000); // page is loaded, not sure
window.onload = demo; // we are dead sure that the page is loaded
