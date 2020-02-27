function clearStudents() {
  var stds = document.getElementById("students");
  console.log(stds.innerHTML);
  stds.innerHTML = "";
  //   stds.remove();
}
var students = ["Hareem", "Hania"];
function loadData() {
  clearStudents();
  var stds = document.getElementById("students");
  for (var i = 0; i < students.length; i++) {
    stds.innerHTML += "<li>" + students[i] + "</li>";
  }
}
function hideStudents() {
  var stds = document.getElementById("students");
  stds.classList.add("hidden");
}
function showStudents() {
  var stds = document.getElementById("students");
  stds.classList.remove("hidden");
}
