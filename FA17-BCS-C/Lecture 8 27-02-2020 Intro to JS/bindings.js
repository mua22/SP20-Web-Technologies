console.log("Script Started");
function handleClick() {
  alert("Clicked");
}
// console.log(typeof handleClick);
function doBindings() {
  console.log("Started Biondings");
  var btn = document.getElementById("mybtn");
  btn.onclick = handleClick;
  console.log("Finished Biondings");
}
window.onload = doBindings;
// setTimeout(doBindings, 2000);

console.log("Script Finished");
