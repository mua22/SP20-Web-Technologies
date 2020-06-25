console.log("Test");
let start = Date.now();
// console.log(start);
function executeBindings() {
  let loadedTime = Date.now();
  console.log(loadedTime - start);
  let testBtn = document.getElementById("test");
  console.log(testBtn);
}

window.onload = executeBindings;
