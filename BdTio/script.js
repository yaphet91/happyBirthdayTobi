burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navItems = document.querySelector('.nav-items');
button = document.querySelector('.button');

burger.addEventListener('click',()=>{
  navItems.classList.toggle('v-class')
  button.classList.toggle('v-class')
  navbar.classList.toggle('h-class')
})

/*document.addEventListener('DOMContentLoaded', function() {
  // Check if the user is not logged in (isLoggedIn flag is not set or is false)
  if (!localStorage.getItem('isLoggedIn') || localStorage.getItem('isLoggedIn') !== 'true') {
    // Redirect the user to the login page
    window.location.href = 'login.html';
  }
});*/