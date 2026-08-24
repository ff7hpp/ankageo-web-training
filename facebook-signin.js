const signinForm = document.querySelector('#facebook-signin-form');

signinForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#facebook-name').value;

    window.location.href = `facebook-welcome.html?name=${encodeURIComponent(name)}`;
});
