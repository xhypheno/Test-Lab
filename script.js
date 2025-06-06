document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signup-form');
  const status = document.getElementById('status');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = 'Thank you for signing up! Check your email for updates.';
        form.reset();
      } else {
        status.textContent = 'Sorry, something went wrong. Please try again later.';
      }
    } catch (err) {
      status.textContent = 'Network error. Please try again.';
    }
  });
});
