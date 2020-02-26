function cleanway() {
  alert("Clean My drawer");
}
console.log("Started Code");
window.onload = doBindings;
console.log("Binding func attached to onload event");
// setTimeout(function() {
//   var mybtn = document.getElementById("mybtn");
//   mybtn.onclick = cleanway;
// }, 3000);

function doBindings() {
  console.log("Doing Bindings");
  var mybtn = document.getElementById("mybtn");
  mybtn.onclick = cleanway;
}
console.log("Finished Code");
