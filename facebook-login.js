const form = document.querySelector("#facebook-login-form");

form.onsubmit = function(event) {
    event.preventDefault();

    const email = document.querySelector("#facebook-email").value;

    const name = email.split("@")[0];

    window.location.href = "facebook-welcome.html?name=" + name;
};