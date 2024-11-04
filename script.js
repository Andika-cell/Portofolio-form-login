const form = document.getElementById('loginForm');
const message = document.querySelector('.message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password123') {
        message.textContent = 'Login successful!';
        message.style.color = '#00ff00';
    } else {
        message.textContent = 'Invalid credentials!';
        message.style.color = '#ff0000';
    }
});
