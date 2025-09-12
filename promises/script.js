function motherPromise() {
  return new Promise((resolve, reject) => {
    let homeworkDone = true; // change to false to test rejection

    if (homeworkDone) {
      resolve("Here’s your chocolate 🍫");
    } else {
      reject("No chocolate until you finish your homework!");
    }
  });
}

motherPromise()
  .then((message) => console.log("Mom says:", message))
  .catch((error) => console.log("Mom says:", error));
