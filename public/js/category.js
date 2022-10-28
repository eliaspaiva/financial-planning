const incomeInput = document.getElementById('income');
const btnIncomeSave = document.getElementById('btn-income-save');
const btnIncomeEdit = document.getElementById('btn-income-edit');

const categoryInput = document.getElementById('category');
const btnCategorySave = document.getElementById('btn-categorty-save');
const btnCategoryEdit = document.getElementById('btn-categorty-edit');
const btnNewCategory = document.getElementById('new-category');

const expenseInput = document.getElementById('expense');
const priceInput = document.getElementById('price');
const btnPriceSave = document.getElementById('btn-price-save');
const btnPriceEdit = document.getElementById('btn-price-edit');

const teste = document.getElementById('teste');

const title = document.getElementById('title');

const budgetSettings = {};
const array = [];



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

// eslint-disable-next-line max-lines-per-function
const getCategoryValue = (e) => {
    e.preventDefault();
    if (categoryInput.value.length > 0) {
        categoryInput.setAttribute('disabled', 'disabled');
        btnCategoryEdit.removeAttribute('disabled');
        btnCategorySave.setAttribute('disabled', 'disabled');
        array.push(categoryInput.value);
        
        btnNewCategory.style.display = 'block';
        console.log(array);
        array.forEach((category) => {
            const el = document.createElement('p');
            array.slice(0, -1);
            if (array.length > 0);
            el.innerHTML = category;
            teste.appendChild(el);
        });

    }
};

const editCategoryValue = (e) => {
    e.preventDefault();
    if (categoryInput.disabled) {
        categoryInput.removeAttribute('disabled');
        btnCategorySave.removeAttribute('disabled');
        btnCategoryEdit.setAttribute('disabled', 'disabled');
        array.pop();
        btnNewCategory.style.display = 'none';
        array.slice(0, -1);
        console.log(array);
       
    }
};

const newCategory = (e) => {
    e.preventDefault();
    if (btnNewCategory.style.display === 'block') {
        categoryInput.removeAttribute('disabled');
        categoryInput.value = '';
        btnCategoryEdit.setAttribute('disabled', 'disabled');
        btnCategorySave.removeAttribute('disabled');
        console.log(array);
    }
};


// Expense

const getExpenseValue = (e) => {
    e.preventDefault();
    if (expenseInput.value.length > 0 && priceInput.value.length) {
        expenseInput.setAttribute('disabled', 'disabled');
        priceInput.setAttribute('disabled', 'disabled');
        btnPriceEdit.removeAttribute('disabled');
        btnPriceSave.setAttribute('disabled', 'disabled');
        budgetSettings.expense = expenseInput.value;
        budgetSettings.price = priceInput.value;
        const values = Object.values(budgetSettings);
        console.log(values);

    }
};

const editExpenseValue = (e) => {
    e.preventDefault();
    if (expenseInput.disabled) {
        expenseInput.removeAttribute('disabled');
        priceInput.removeAttribute('disabled');
        btnPriceSave.removeAttribute('disabled');
        btnPriceEdit.setAttribute('disabled', 'disabled');
        
    }
};

btnIncomeSave.addEventListener('click', getIncomeValue);
btnIncomeEdit.addEventListener('click', editIncomeValue);
btnCategorySave.addEventListener('click', getCategoryValue);
btnCategoryEdit.addEventListener('click', editCategoryValue);
btnNewCategory.addEventListener('click', newCategory);
btnPriceSave.addEventListener('click', getExpenseValue);
btnPriceEdit.addEventListener('click', editExpenseValue);