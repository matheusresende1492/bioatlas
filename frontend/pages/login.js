document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector(`#login_btn`);
    btn.addEventListener(`click`, function (event) {
        event.preventDefault();
        validateLogin();
    });
});

function appendAlert(alertPlaceholder, message, type) {
    alertPlaceholder.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible mt-3" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');
}

function validateLogin() {
    email = document.getElementById(`email_input`);
    emailAlert = document.getElementById(`email_input_alert`);

    password = document.getElementById(`password_input`);
    passwordAlert = document.getElementById(`password_input_alert`);
    if (email.value.trim() == "") {
        email.style.borderColor = "red";
        appendAlert(emailAlert, "O Email não pode estar vazio!", "danger");
    } else {
        email.style.borderColor = "gray";
        emailAlert.innerHTML = "";
    }

    if (password.value.trim() == "") {
        password.style.borderColor = "red";
        appendAlert(passwordAlert, "Por favor informe sua senha!", "danger");
    } else {
        password.style.borderColor = "gray";
        passwordAlert.innerHTML = "";
    }
}