const income = document.getElementById('income');
const btnIncomeSave = document.getElementById('btnIncomeSave');
const btnIncomeEdit = document.getElementById('btnIncomeEdit');

const getIncomeValue = (e) => {
    e.preventDefault();
    const value = income.value;
    if (value.length > 0) {
        income.setAttribute('disabled', 'disabled');
        btnIncomeEdit.removeAttribute('disabled');
    }
};

const btnIncomeEdit = (e) => {
    e.preventDefault();
    const value = income.value;
    if (value.length > 0) {
        income.setAttribute('disabled', 'disabled');
        btnIncomeEdit.removeAttribute('disabled');
    }
};

btnIncomeSave.addEventListener('click', getIncomeValue);