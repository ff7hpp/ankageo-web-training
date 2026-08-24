const loginForm = document.querySelector('#facebook-login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.querySelector('#facebook-email').value;
    const name = email.split('@')[0] || 'User';

    window.location.href = `facebook-welcome.html?name=${encodeURIComponent(name)}`;
});
