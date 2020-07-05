function one() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1");
    }, 1000);
  });
}
function two() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2");
    }, 700);
  });
}
function three() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3");
    }, 400);
  });
}

// WORKING
one().then((res) => {
  console.log("1");
  two().then((res) => {
    console.log("2");
    three().then((res) => {
      console.log("3");
    });
  });
});

for(let i = 0; i < 3; i++) {
    one().then((res) => {
        console.log('1')
        two().then((res) => {
            console.log('2')
            three().then((res) => {
                console.log('3')
            })
        })
    })  