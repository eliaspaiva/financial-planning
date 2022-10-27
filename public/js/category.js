const incomeInput = document.getElementById('income');
const btnIncomeSave = document.getElementById('btn-income-save');
const btnIncomeEdit = document.getElementById('btn-income-edit');

const categoryInput = document.querySelector('.category');
const btnCategorySave = document.getElementById('btn-categorty-save');
const btnCategoryEdit = document.getElementById('btn-categorty-edit');

const expenseInput = document.querySelector('.price-input');
const btnExpenseSave = document.getElementById('btn-expense-save');
const btnExpenseEdit = document.getElementById('btn-expense-edit');


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
    
};
btnAddCategory.addEventListener('click', insertCategory);
btnIncomeSave.addEventListener('click', getIncomeValue);
btnIncomeEdit.addEventListener('click', editIncomeValue);