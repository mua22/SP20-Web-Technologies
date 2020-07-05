window.onload = async function () {
  setData("Window Loaded");

  //   Promise.race([firstPromise(), secondPromise()]).then(() => {
  //     setData("Both promises Resolved");
  //   });
  //   setTimeout(() => {
  //     setData("Called After 3 seconds");
  //   }, 3000);

  //   firstPromise().then((data) => {
  //     setData(data);
  //     readDataFromAPI().then(() => {
  //       setData("Read APi promise Resolved");
  //     });
  //     secondPromise().then((data) => {
  //       setData(data);
  //     });
  //   });
  awaitPromiseCall();
  setData("await promise called");
};

async function awaitPromiseCall() {
  let d1 = await firstPromise();
  let d2 = await secondPromise();
}
function setData(data) {
  $("#result").append(`<li>${data}</li>`);
}

function firstPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      setData("about to resolve first");
      resolve("Promise Resolved After 6 seconds");
    }, 6000);
  });
}
function secondPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      setData("about to resolve second");
      resolve("Second Promise Resolved After 3 seconds");
    }, 3000);
  });
}

function readDataFromAPI() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://usman-recipes.herokuapp.com/api/recipes",
      method: "GET",
      success: function (data) {
        resolve(data);
      },
    });
  });
}
