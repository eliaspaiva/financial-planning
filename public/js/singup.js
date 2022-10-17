const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cPassword = document.getElementById('cPassword');
const btn = document.getElementById('btn');
const openEye = document.querySelector('.fa-eye');
const closedEye = document.querySelector('.fa-eye-slash');

const enabledButton = () => {
    if (username.value.length > 4 && email.value.length > 0 && password.value.length > 5 && cPassword.value.length > 5 && password.value === cPassword.value) {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled', 'disabled');
    }
};

const passwordVisibility = () => {
    if (password.value.length > 0) {
        openEye.style.display = 'block';
    }
};

const showPassword = () => {
    password.type = 'text';
    openEye.style.display = 'none';
    closedEye.style.display = 'block';
};

const hidePassword = () => {
    password.type = 'password';
    openEye.style.display = 'block';
    closedEye.style.display = 'none';
};

// Event Listeners
form.addEventListener('input', enabledButton);
password.addEventListener('input', passwordVisibility);
openEye.addEventListener('click', showPassword);
closedEye.addEventListener('click', hidePassword);
