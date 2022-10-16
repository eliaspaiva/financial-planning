const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cPassword = document.getElementById('cPassword');
const btn = document.getElementById('btn');

if (username.value.length > 0 && email.value.length > 0 && password.value.length > 0 && cPassword.value.length > 0) {
    btn.removeAttribute('disabled');
}