// Get the signup and signin forms
var signupForm = document.getElementById("signup-form");
var signinForm = document.getElementById("signin-form");

// Get the signup and signin links
var signupLink = document.getElementById("signup-link");
var signinLink = document.getElementById("signin-link");

// Add event listeners to the links to toggle the forms
signupLink.addEventListener("click", function () {
  signupForm.style.display = "block";
  signinForm.style.display = "none";
});

signinLink.addEventListener("click", function () {
  signupForm.style.display = "none";
  signinForm.style.display = "block";
});

// Add event listener to the signup form to save the user data in localStorage
signupForm.addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the user input values
  var username = signupForm.username.value;
  var email = signupForm.email.value;
  var password = signupForm.psw.value;
  var passwordRepeat = signupForm["psw-repeat"].value;

  // Validate the password match
  if (password !== passwordRepeat) {
    alert("Passwords do not match");
    return;
  }

  // Create a user object
  var user = {
    username: username,
    email: email,
    password: password,
  };

  // Save the user object in localStorage
  localStorage.setItem("user", JSON.stringify(user));

  // Clear the form fields
  signupForm.reset();

  // Show a success message
  alert("You have successfully signed up. Please sign in to continue.");

  // Switch to the signin form
  signupForm.style.display = "none";
  signinForm.style.display = "block";
});

// Add event listener to the signin form to check the user data in localStorage
signinForm.addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the user input values
  var username = signinForm.username.value;
  var password = signinForm.psw2.value;

  // Get the user object from localStorage
  var user = JSON.parse(localStorage.getItem("user"));

  // Check if the user exists and the credentials match
  if (user && user.username === username && user.password === password) {
    // Clear the form fields
    signinForm.reset();

    // Redirect to the hero page
    window.location.href = "index.html";
  } else {
    // Show an error message
    alert("Invalid username or password");
  }
});

let eyeicon = document.getElementById("eyeicon");
let psw = document.getElementById("psw");

eyeicon.onclick = function () {
  if (psw.type == "password") {
    psw.type = "text";
    eyeicon.src = "eye-open.png";
  } else {
    psw.type = "password";
    eyeicon.src = "eye-close.png";
  }
};

let eyeicon1 = document.getElementById("eyeicon1");
let pswRepeat = document.getElementById("psw-repeat");

eyeicon1.onclick = function () {
  if (pswRepeat.type == "password") {
    pswRepeat.type = "text";
    eyeicon1.src = "eye-open.png";
  } else {
    pswRepeat.type = "password";
    eyeicon1.src = "eye-close.png";
  }
};

let eyeicon2 = document.getElementById("eyeicon2");
let psw2 = document.getElementById("psw2");

eyeicon2.onclick = function () {
  if (psw2.type == "password") {
    psw2.type = "text";
    eyeicon2.src = "eye-open.png";
  } else {
    psw2.type = "password";
    eyeicon2.src = "eye-close.png";
  }
};
