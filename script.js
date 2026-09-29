const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get('name').toString().trim();
    const email = data.get('email').toString().trim();
    const message = data.get('message').toString().trim();

    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:hello@yourdomain.com?subject=${subject}&body=${body}`;
    note.textContent = 'Your email app should open with the message drafted.';
  });
}
