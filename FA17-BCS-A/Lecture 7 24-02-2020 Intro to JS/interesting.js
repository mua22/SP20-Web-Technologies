function changeColor() {
  console.log("About to change color");
  var mydiv = document.getElementById("test");
  if (mydiv.classList.contains("green")) {
    mydiv.classList.remove("green");
    mydiv.classList.add("red");
  } else if (mydiv.classList.contains("red")) {
    mydiv.classList.remove("red");
    mydiv.classList.add("green");
  }
}

function wah() {
  setInterval(changeColor, 100);
}
