const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting

  if (usernameInput.value.trim() === '' || inputPassword.value.trim()=== '') 
    {
    errorMessage.style.display = 'block';
  } 
  else {
    errorMessage.style.display = 'none';
    alert('Form submitted successfully!');
    // Example: loginForm.submit();
  }
});