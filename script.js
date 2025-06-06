document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    // Display a thank-you message after submission
    alert('Thank you for signing up! Check your email for updates.');
  });
});
