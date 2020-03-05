console.log("Starting");
function test() {
  alert("Class is awesome");
}
function attachments() {
  console.log("Binding Started");
  var btn = document.getElementById("myBtn");
  btn.onclick = test;
}
// setTimeout(attachments, 1000);
window.onload = attachments;
console.log("Finish");
