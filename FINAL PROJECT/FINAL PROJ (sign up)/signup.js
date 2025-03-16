document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('signup-email').value;
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    alert(`Account created successfully!\nEmail: ${email}\nUsername: ${username}`);
});
