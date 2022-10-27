const incomeInput = document.getElementById('income');
const btnIncomeSave = document.getElementById('btn-income-save');
const btnIncomeEdit = document.getElementById('btn-income-edit');

const categoryInput = document.getElementById('category');
const btnCategorySave = document.getElementById('btn-categorty-save');
const btnCategoryEdit = document.getElementById('btn-categorty-edit');

const expenseInput = document.getElementById('expense');
const priceInput = document.getElementById('price');
const btnPriceSave = document.getElementById('btn-price-save');
const btnPriceEdit = document.getElementById('btn-price-edit');

// Income
const getIncomeValue = (e) => {
    e.preventDefault();
    if (incomeInput.value.length > 0) {
        incomeInput.setAttribute('disabled', 'disabled');
        btnIncomeEdit.removeAttribute('disabled');
        btnIncomeSave.setAttribute('disabled', 'disabled');
    }
};

const editIncomeValue = (e) => {
    e.preventDefault();
    if (incomeInput.disabled) {
        incomeInput.removeAttribute('disabled');
        btnIncomeSave.removeAttribute('disabled');
        btnIncomeEdit.setAttribute('disabled', 'disabled');
    }
};

// Category

const getCategoryValue = (e) => {
    e.preventDefault();
    if (categoryInput.value.length > 0) {
        categoryInput.setAttribute('disabled', 'disabled');
        btnCategoryEdit.removeAttribute('disabled');
        btnCategorySave.setAttribute('disabled', 'disabled');
    }
};

const editCategoryValue = (e) => {
    e.preventDefault();
    if (categoryInput.disabled) {
        categoryInput.removeAttribute('disabled');
        btnCategorySave.removeAttribute('disabled');
        btnCategoryEdit.setAttribute('disabled', 'disabled');
    }
};


// Expense

const getExpenseValue = (e) => {
    e.preventDefault();
    console.log('oi');
    if (expenseInput.value.length > 0) {
        expenseInput.setAttribute('disabled', 'disabled');
        btnPriceEdit.removeAttribute('disabled');
        btnCategorySave.setAttribute('disabled', 'disabled');
    }
};

const editExpenseValue = (e) => {
    e.preventDefault();
    if (expenseInput.disabled) {
        expenseInput.removeAttribute('disabled');
        btnCategorySave.removeAttribute('disabled');
        btnPriceEdit.setAttribute('disabled', 'disabled');
    }
};

btnIncomeSave.addEventListener('click', getIncomeValue);
btnIncomeEdit.addEventListener('click', editIncomeValue);
btnCategorySave.addEventListener('click', getCategoryValue);
btnCategoryEdit.addEventListener('click', editCategoryValue);
btnPriceSave.addEventListener('click', getExpenseValue);
btnPriceEdit.addEventListener('click', editExpenseValue);