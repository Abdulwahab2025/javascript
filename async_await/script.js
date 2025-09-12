async function motherPromise(homeworkDone) {
  if (homeworkDone) {
    return "Here’s your chocolate 🍫"; // resolve
  } else {
    throw "No chocolate until you finish your homework!"; // reject
  }
}

async function checkWithMom() {
  try {
    let message = await motherPromise(false); // change to false to test rejection
    console.log("Mom says:", message);
  } catch (error) {
    console.log("Mom says:", error);
  }
}

checkWithMom();
