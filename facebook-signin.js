const form = document.querySelector("#facebook-signin-form");

form.onsubmit = function(event) {
    event.preventDefault();

    const name = document.querySelector("#facebook-name").value;

    window.location.href = "facebook-welcome.html?name=" + name;
};