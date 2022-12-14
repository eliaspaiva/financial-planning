// Variables
const username = document.getElementById('username');
const password = document.getElementById('password');
const btn = document.getElementById('btn');
const btnClear = document.getElementById('btn-clear');
const form = document.getElementById('form');
const checkbox = document.getElementById('checkbox');
const lock = document.querySelector('.fa-lock');
const openEye = document.querySelector('.fa-eye');
const closedEye = document.querySelector('.fa-eye-slash');

// Button Activation and Password Visibility
const enabledButton = () => {
    username.value.length > 0 && password.value.length > 5 ? btn.removeAttribute('disabled') : btn.setAttribute('disabled', 'disabled');

    if (username.value.length > 0 && password.value.length >= 1) {
        lock.style.display = 'none';
        openEye.style.display = 'block';
    } else {
        openEye.style.display = 'none';
        lock.style.display = 'block';
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

const clearField = () => {
    if (username.value.length >= 0 && password.value.length >= 0) {
        username.value = '';
        password.value = '';
        btn.setAttribute('disabled', 'disabled');
        openEye.style.display = 'none';
        closedEye.style.display = 'none';
        lock.style.display = 'block';

    }
};

// Remember Me Checkbox
const getLoginDetails = () => {
    const loginDetails = {
        username: username.value,
        password: password.value,
    };
    if (checkbox.checked == true) {
        localStorage.setItem('user', JSON.stringify(loginDetails));
    }
};

//Page Load
const pageLoad = () => {
    if ('user' in localStorage) {
        const loginDetails = JSON.parse(window.localStorage.getItem('user'));
        username.value = Object.values(loginDetails)[0];
        password.value = Object.values(loginDetails)[1];
        openEye.style.display = 'block';
    }

    if (username.value.length > 0 && password.value.length > 5) {
        btn.removeAttribute('disabled');
        openEye.style.display = 'block';
        lock.style.display = 'none';
    }
        
};

// Event Listeners
form.addEventListener('input', enabledButton);
openEye.addEventListener('click', showPassword);
closedEye.addEventListener('click', hidePassword);
btn.addEventListener('click', getLoginDetails);
btnClear.addEventListener('click', clearField);
window.addEventListener('load', pageLoad);