const signUpForm = document.querySelector('.signup-form');

function validateSignUpForm(event) {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const userName = document.querySelector('#userName').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirmPassword').value;
  const textRegex = /^[a-zA-Z0-9\\,\\.\s]/g;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const passwordRegex = /[^\w]/;

  clearError();

  validateEmail(email, emailRegex);
  validateUserName(userName, textRegex);
  validatePassword(password, confirmPassword, passwordRegex);
}

function validateUserName(name, regex) {
  if (!name.match(regex) || name.trim() !== name || !name) {
    displayError(
      'userNameError',
      'Please enter the correct format for Username. (No leading or trailing spaces)'
    );
  }
}

function validateEmail(email, regex) {
  if (!email.match(regex)) {
    displayError(
      'emailError',
      'Email address empty or wrong format. Example: abc@g.com'
    );
  }
}

function validatePassword(password, confirmPassword, regex) {
  if (password.length < 8 || !regex.test(password)) {
    displayError(
      'passwordError',
      'Please enter the correct format for password. (8 charaters at least one non-letter)'
    );
  }

  if (confirmPassword.length < 8 || !regex.test(confirmPassword)) {
    displayError(
      'confirmPasswordError',
      'Please enter the correct format for confirm password. (8 charaters at least one non-letter)'
    );
  }

  if (confirmPassword !== password) {
    displayError(
      'confirmPasswordError',
      'Make sure password and confirm password match'
    );
  }
}

function displayError(error, errorMessage) {
  document.getElementById(error).innerHTML = errorMessage;
}

function clearError() {
  let errors = document.querySelectorAll('.error');
  errors.forEach((err) => {
    err.innerHTML = '';
  });
}

signUpForm.addEventListener('submit', validateSignUpForm);
