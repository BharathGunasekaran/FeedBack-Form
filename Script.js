const first = document.getElementById("first_bt1");

const last = document.getElementById("last_bt1");

const email = document.getElementById("bt2");

const DOB = document.getElementById("bt3");

const phone = document.getElementById("bt4");

const feedback = document.getElementById("bt5");

function check(event) {
  // event.preventDefault();

  if (
    !feedback.value &&
    feedback.value.trim() === "" &&
    !first.value &&
    first.value.trim() === "" &&
    !last.value &&
    last.value.trim() === "" &&
    !email.value &&
    email.value.trim() === "" &&
    !DOB.value &&
    DOB.value.trim() === "" &&
    !phone.value &&
    phone.value.trim() === ""
  ) {
    alert("Please fill the feedback form");
    return false;
  }

  if (!first.value && first.value.trim() === "") {
    print("Please fill the first name field");
    return false;
  }

  if (!last.value && last.value.trim() === "") {
    alert("Please fill the last name field");
    return false;
  }

  if (!email.value && email.value.trim() === "") {
    alert("Please fill the Email field");
    return false;
  }

  if (!DOB.value && DOB.value.trim() === "") {
    alert("Please fill the DOB field");
    return false;
  }

  if (!phone.value && phone.value.trim() === "") {
    alert("Please fill the phone number field");
    return false;
  }

  if (!feedback.value && feedback.value.trim() === "") {
    alert("Please fill the feedback field");
    return false;
  }

  console.log("First Name : ", first.value);
  console.log("Last Name : ", last.value);
  console.log("Email : ", email.value);
  console.log("Date Of Birth : ", DOB.value);
  console.log("Phone : ", phone.value);
  console.log("Feedback : ", feedback.value);

  $.ajax({
    url: "submit.php",
    type: "POST",
    data: {
      first: first.value,
      last: last.value,
      email: email.value,
      dob: DOB.value,
      phone: phone.value,
      feed: feedback.value,
    },
    success: function (response) {
      // Success callback
      console.log(response);
      alert(response);
    },
    error: function (error) {
        // Error callback
      console.log(error);
      alert(error);
    },
  });

  return true;
}

function reset_form(event) {
  // event.preventDefault()
  if (
    !feedback.value &&
    feedback.value.trim() === "" &&
    !first.value &&
    first.value.trim() === "" &&
    !last.value &&
    last.value.trim() === "" &&
    !email.value &&
    email.value.trim() === "" &&
    !DOB.value &&
    DOB.value.trim() === "" &&
    !phone.value &&
    phone.value.trim() === ""
  ) {
    alert("Please fill the feedback form");
    return false;
  }
  return true;
}
