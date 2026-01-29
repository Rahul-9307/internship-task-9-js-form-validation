const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Utility functions
function showError(input, message) {
  const small = input.nextElementSibling;
  input.classList.add("error-input");
  input.classList.remove("success");
  small.textContent = message;
  small.classList.add("visible");
}

function showSuccess(input) {
  const small = input.nextElementSibling;
  input.classList.remove("error-input");
  input.classList.add("success");
  small.classList.remove("visible");
}

// Email regex
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Name
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    isValid = false;
  } else {
    showSuccess(nameInput);
  }

  // Email
  if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, "Email is not valid");
    isValid = false;
  } else {
    showSuccess(emailInput);
  }

  // Password
  if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    isValid = false;
  } else {
    showSuccess(passwordInput);
  }

  // Confirm Password
  if (confirmPasswordInput.value !== passwordInput.value) {
    showError(confirmPasswordInput, "Passwords do not match");
    isValid = false;
  } else {
    showSuccess(confirmPasswordInput);
  }

  if (isValid) {
    alert("Registration Successful!");
    form.reset();
  }
});

// Real-time validation
[nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
  input.addEventListener("keyup", () => {
    if (input.value.trim() !== "") {
      showSuccess(input);
    }
  });
});
