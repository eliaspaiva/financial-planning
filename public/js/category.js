const income = document.getElementById('income');
const btnIncomeSave = document.getElementById('btnIncomeSave');
const btnIncomeEdit = document.getElementById('btnIncomeEdit');
const categoryInput = document.querySelector('.category-input');
const priceInput = document.querySelector('.price-input');
const expenseInput = document.querySelector('.expense-input');
const btnAddCategory = document.querySelector('.btn-add-category');


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

const insertCategory = (e) => {
    e.preventDefault();
    

}

btnIncomeSave.addEventListener('click', getIncomeValue);
btnIncomeEdit.addEventListener('click', editIncomeValue);