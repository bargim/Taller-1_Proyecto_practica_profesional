var btnValidar = document.getElementById('btn-register').addEventListener('click', validar);
var btnservices = document.getElementById('btnServices');
var loginModal = new bootstrap.Modal(document.getElementById('loginModal'), {
    keyboard: false
});

function validar() {
    let email = document.getElementById('email')
    let pass = document.getElementById('pass')

    if (email.value == "admin@pc1.com" && pass.value == "1234") {
        console.log("registro exitoso");
        email.classList.remove('border', 'border-4', 'border-danger', 'login-error');
        pass.classList.remove('border', 'border-4', 'border-danger', 'login-error');
        btnservices.classList.remove('d-none');
        loginModal.hide();

    } else if (email.value == "juan@pc1.com" && pass.value == "1234") {
        console.log("registro exitoso");
        email.classList.remove('border', 'border-4', 'border-danger', 'login-error');
        pass.classList.remove('border', 'border-4', 'border-danger', 'login-error');
        loginModal.hide();
    } else {
        email.classList.add('border', 'border-4', 'border-danger', 'login-error');
        pass.classList.add('border', 'border-4', 'border-danger', 'login-error');
        email.value = 'Error: Email o Contraseña incorrecta...';
    }
}