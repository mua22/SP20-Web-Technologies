function calculate() {
  let pkr = document.getElementById("pkr").value;
  let r = pkr / 150;
  r = Number(r).toFixed(2);
  document.getElementById("result").innerHTML = r;
}

window.onload = function () {
  document.getElementById("btn").onclick = calculate;
};
