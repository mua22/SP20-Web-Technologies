window.onload = async function () {
  loadData();
};

function loadData() {
  axios.get("https://usman-recipes.herokuapp.com/api/recipes").then((res) => {
    console.log(res.data);
    $("#recipies").empty();
    for (var i = 0; i < res.data.length; i++) {
      $("#recipies").append(`<li>${res.data[i].title}</li>`);
    }
  });
}

function createRecipie(title, body) {
  axios
    .post("https://usman-recipes.herokuapp.com/api/recipes", {
      title,
      body,
    })
    .then((res) => {
      console.log(res.data);
    });
}
