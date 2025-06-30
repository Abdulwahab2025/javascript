function findSchool() {
    const age = parseInt(document.getElementById("ageInput").value);
    let message = '';
  
    if (isNaN(age) || age < 0 || age > 25) {
      message = "Please enter a valid age between 0 and 25.";
    } else if (age >= 0 && age <= 3) {
      message = "Your child is too young for formal education (pre-nursery).";
    } else if (age >= 4 && age <= 5) {
      message = "Your child should be in Nursery or Reception (Early Years Foundation Stage).";
    } else if (age >= 5 && age <= 10) {
      message = "Your child should be in Primary School.";
    } else if ((age >= 11 && age <= 16) && !(age === 15 || age === 13)) {
      message = "Your child should be in Secondary School.";
    } else if ((age === 15 || age === 13) || age === 16) {
      message = "Your child might be in GCSE or about to finish Secondary School.";
    } else if (age >= 17 && age <= 18) {
      message = "Your child should be in Sixth Form or College (A-Levels or vocational).";
    } else if (age >= 19 && age <= 22) {
      message = "Your child is likely in University (Undergraduate level).";
    } else if (age > 22 && age <= 25) {
      message = "Your child could be in Postgraduate education or employment.";
    } else {
      message = "Unable to determine school stage.";
    }
  
    document.getElementById("result").innerText = message;
  }
  