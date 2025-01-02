// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:cprakash920256@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;

    window.location.href = mailtoLink;
});
