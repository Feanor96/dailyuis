let state = false;
let confirmState = false;

const passwordInput = document.getElementById('password-input');
const confirmPasswordInput = document.getElementById('confirm-password-input');
const eyeConfirm = document.getElementById('eye-confirm');
const eye = document.getElementById('eye');

const togglePassword = () => {
    if (state) {
        passwordInput.setAttribute('type', 'password');
        eye.setAttribute('class', 'fa-solid fa-eye-slash')
        state = false;
    } else {
        passwordInput.setAttribute('type', 'text');
        eye.setAttribute('class', 'fa-solid fa-eye')
        state = true;
    }
}

const toggleConfirmPassword = () => {
    if (confirmState) {
        confirmPasswordInput.setAttribute('type', 'password');
        eyeConfirm.setAttribute('class', 'fa-solid fa-eye-slash')
        confirmState = false;
    } else {
        confirmPasswordInput.setAttribute('type', 'text');
        eyeConfirm.setAttribute('class', 'fa-solid fa-eye')
        confirmState = true;
    }
}