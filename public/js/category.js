const income = document.getElementById('income');
const btnIncomeSave = document.getElementById('btnIncomeSave');
const btnIncomeEdit = document.getElementById('btnIncomeEdit');

const getIncomeValue = (e) => {
    e.preventDefault();
    if (income.value.length > 0) {
        income.setAttribute('disabled', 'disabled');
        btnIncomeEdit.removeAttribute('disabled');
        btnIncomeSave.setAttribute('disabled', 'disabled');
    }
};

const editIncomeValue = (e) => {
    e.preventDefault();
    if (income.disabled) {
        income.removeAttribute('disabled');
        btnIncomeSave.removeAttribute('disabled');
        btnIncomeEdit.setAttribute('disabled', 'disabled');
    }
};

btnIncomeSave.addEventListener('click', getIncomeValue);
btnIncomeEdit.addEventListener('click', editIncomeValue);