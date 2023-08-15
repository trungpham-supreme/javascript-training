const signUpForm = document.querySelector('.signup-form');

function validateSignUpForm(event) {
  event.preventDefault();

  // Information from input
  const email = document.querySelector('#email').value;
  const name = document.querySelector('#name').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirmPassword').value;

  const textRegex = /^[a-zA-Z0-9\\,\\.\s]/g;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const passwordRegex = /[^\w]/;
  const userInfo = document.querySelector('.user-info');
  userInfo.style.display = 'none';
  let isValid = true;

  clearError();

  // Validate data from input
  isValid = validateEmail(email, emailRegex);
  isValid = validateUserName(name, textRegex);
  isValid = validatePassword(password, confirmPassword, passwordRegex);
  isValid = validateConfirmPassword(password, confirmPassword, passwordRegex);

  if (isValid) {
    // Display user info if all input is valid
    document.getElementById('userName').textContent = name;
    document.getElementById('userEmail').textContent = email;
    document.getElementById('userPassword').textContent = password;
    document.getElementById('userConfirmPassword').textContent =
      confirmPassword;
    userInfo.style.display = 'block';
  }
}

// Validate name input
function validateUserName(name, regex) {
  if (!name.match(regex) || name.trim() !== name || !name) {
    displayError(
      'userNameError',
      'Please enter the correct format for Username. (No leading or trailing spaces)'
    );
    return false;
  }
  return true;
}

// Validate email input
function validateEmail(email, regex) {
  if (!email.match(regex)) {
    displayError(
      'emailError',
      'Email address empty or wrong format. Example: abc@g.com'
    );
    return false;
  }
  return true;
}

// Validate password input
function validatePassword(password, confirmPassword, regex) {
  if (password.length < 8 || !regex.test(password)) {
    displayError(
      'passwordError',
      'Please enter the correct format for password. (8 charaters at least one non-letter)'
    );
    return false;
  }
}

// Validate confirmPassword input
function validateConfirmPassword(password, confirmPassword, regex) {
  if (confirmPassword.length < 8 || !regex.test(confirmPassword)) {
    displayError(
      'confirmPasswordError',
      'Please enter the correct format for confirm password. (8 charaters at least one non-letter)'
    );
    return false;
  }

  if (confirmPassword !== password) {
    displayError(
      'confirmPasswordError',
      'Make sure password and confirm password match'
    );
    return false;
  }
  return true;
}

// Display error
function displayError(error, errorMessage) {
  document.getElementById(error).innerHTML = errorMessage;
}

// Clear error
function clearError() {
  let errors = document.querySelectorAll('.error');
  errors.forEach((err) => {
    err.innerHTML = '';
  });
}

signUpForm.addEventListener('submit', validateSignUpForm);
