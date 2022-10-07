const username = document.getElementById('username');
const password = document.getElementById('password');
const btn = document.getElementById('btn');
const form = document.getElementById('form');

const enabledButton = () => {
    if (username.value.length > 0 && password.value.length > 6) {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled', 'disabled');
    }
}
  ;

form.addEventListener('input', enabledButton);




