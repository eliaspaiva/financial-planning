const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cPassword = document.getElementById('cPassword');
const btn = document.getElementById('btn');

const enabledButton = () => {
    if (username.value.length > 4 && email.value.length > 0 && password.value.length > 5 && cPassword.value.length > 5 && password.value == cPassword.value) {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled', 'disabled');
    }
};

form.addEventListener('input', enabledButton);
