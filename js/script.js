// Variables
const username = document.getElementById('username');
const password = document.getElementById('password');
const btn = document.getElementById('btn');
const form = document.getElementById('form');
const checkbox = document.getElementById('checkbox');
const openEye = document.querySelector('.fa-eye');
const closedEye = document.querySelector('.fa-eye-slash');
const rememberMe = document.getElementById('rememberMe');

// Button Activation and Password Visibility
const enabledButton = () => {
    if (username.value.length > 0 && password.value.length > 5) {
        btn.removeAttribute('disabled');
        openEye.style.display = 'block';
    } else {
        btn.setAttribute('disabled', 'disabled');
    }

    if (password.value.length === 0) {
        openEye.style.display = 'none';
        closedEye.style.display = 'none';
    }
};

const showPassword = () => {
    password.type = 'text';
    localStorage.setItem('password', password.value);
    openEye.style.display = 'none';
    closedEye.style.display = 'block';
};

const hidePassword = () => {
    password.type = 'password';
    openEye.style.display = 'block';
    closedEye.style.display = 'none';
};

// Remember Me Checkbox
const getLoginDetails = () => {
    clear()
    const loginDetails = {
        username: username.value,
        password: password.value,
    };
    if (checkbox.checked = true) {
        localStorage.setItem('user', JSON.stringify(loginDetails));
    }
};



// Event Listener
form.addEventListener('input', enabledButton);
openEye.addEventListener('click', showPassword);
closedEye.addEventListener('click', hidePassword);
btn.addEventListener('click', getLoginDetails);
