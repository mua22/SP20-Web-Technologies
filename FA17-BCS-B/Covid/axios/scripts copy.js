window.onload = async function () {
  testAxios();
  //   console.log(getData(6));
  getData(3)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));

  let da = await getData(2);
  console.log(da);
};

function getData(test) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (test > 5) resolve("Test is Correct");
      else reject("Test is InCorrect");
    }, 5000);
  });
}

function testAxios() {
  axios.get("https://usman-recipes.herokuapp.com/api/recipes").then((res) => {
    console.log(res.data);
  });
  axios
    .post("https://usman-recipes.herokuapp.com/api/recipes", {
      title: "New Recipe",
      body: "How To make New Recipie",
    })
    .then((res) => {
      console.log(res.data);
    });
}
