window.onload = function() {
  var mybtn = document.getElementById("mybtn");
  mybtn.onclick = function() {
    alert("Clean My drawer");
  };
  mybtn.onmouseenter = function() {
    console.log("Mouse Enter");
  };
  mybtn.onmouseleave = function() {
    console.log("Mouse Left");
  };
};
