const username = document.getElementById('username');
const password = document.getElementById('password');
const btn = document.getElementById('btn');
const form = document.getElementById('form');
const openEye = document.querySelector('.fa-eye');
const closedEye = document.querySelector('.fa-eye-slash');

const enabledButton = () => {
    if (username.value.length > 0 && password.value.length > 5) {
        btn.removeAttribute('disabled');
        console.log('oi');
        openEye.style.display = 'block';
    } else {
        btn.setAttribute('disabled', 'disabled');
    }

    if (password.value.length < 6) {
        openEye.style.display = 'none';
    }
};

const showPassword = () => {
    password.type = 'text';
    openEye.style.display = 'none';
    closedEye.style.display = 'block';
};


form.addEventListener('input', enabledButton);
openEye.addEventListener('click', showPassword);


