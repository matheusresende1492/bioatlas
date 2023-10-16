document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('profilePicture').addEventListener('change', function (e) {
        var profileImage = document.getElementById('profileImage');
        var file = e.target.files[0];

        if (file) {
            var reader = new FileReader();
            reader.onload = function () {
                profileImage.src = reader.result;
            }
            reader.readAsDataURL(file);
        } else {
            profileImage.src = 'default-profile-image.jpg';
        }
    });

    document.getElementById('saveChanges').addEventListener('click', function () {
        // Salvar no backend
        validateSave();
    });

    document.getElementById('deleteAccount').addEventListener('click', function () {
        // Deletar no backend
    });
});


function validateSave() {
    // var fullName = document.getElementById(`fullName`);
    // var fullNameInputAlert = document.getElementById(`fullName_input_alert`);

    // var password = document.getElementById(`password`);
    // var passwordAlert = document.getElementById(`password_input_alert`);

    // if (fullName.value.trim() == "") {
    //     fullName.style.borderColor = "red";
    //     appendAlert(fullNameInputAlert, "O Email não pode estar vazio!", "danger");
    // } else {
    //     email.style.borderColor = "gray";
    //     fullNameInputAlert.innerHTML = "";
    // }

    // if (password.value.trim() == "") {
    //     password.style.borderColor = "red";
    //     appendAlert(passwordAlert, "Por favor informe sua senha!", "danger");
    // } else {
    //     password.style.borderColor = "gray";
    //     passwordAlert.innerHTML = "";
    // }
}