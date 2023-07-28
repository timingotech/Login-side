const passwordInput = document.getElementById('password');
const showPasswordIcon = document.getElementById('showPasswordIcon');
const hidePasswordIcon = document.getElementById('hidePasswordIcon');

showPasswordIcon.addEventListener('click', function() {
  passwordInput.type = 'text';
  showPasswordIcon.style.display = 'none';
  hidePasswordIcon.style.display = 'inline-block';
});
hidePasswordIcon.addEventListener('click', function() {
    passwordInput.type = 'password';
    hidePasswordIcon.style.display = 'none';
    showPasswordIcon.style.display = 'inline-block';
  });
  

