document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector(`#btnCadastro`);
    btn.addEventListener(`click`, function (event) {
        event.preventDefault();
        validateCadastro();
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

function validateCadastro() {
    var fullNname = document.getElementById(`name_input`);
    var fullNameAlert = document.getElementById(`name_input_alert`);

    var email = document.getElementById(`email_input`);
    var emailAlert = document.getElementById(`email_input_alert`);

    var password = document.getElementById(`password_input`);
    var passwordAlert = document.getElementById(`password_input_alert`);

    var confirmPassword = document.getElementById(`confirmPassword`);
    var confirmPasswordInput = document.getElementById(`confirm_password_input_alert`);

    if (fullNname.value.trim() == "") {
        fullNname.style.borderColor = "red";
        appendAlert(fullNameAlert, "O nome não pode estar vazio!", "danger");
    } else {
        fullNname.style.borderColor = "gray";
        fullNameAlert.innerHTML = "";
    }

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

    if (confirmPassword.value.trim() != password.value.trim()) {
        confirmPassword.style.borderColor = "red";
        appendAlert(confirmPasswordInput, "As senhas informadas não são iguais!", "danger");
    } else {
        confirmPassword.style.borderColor = "gray";
        confirmPasswordInput.innerHTML = "";
    }
}