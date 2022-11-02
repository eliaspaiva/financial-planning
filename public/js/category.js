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

const dropdownMenu = document.getElementById('dropdown');

const resultBox = document.getElementById('resultBox');
const saveInputValue = [];
const expenseObject = {};
// Helper Functions



// Dynamic Html
const dataToDropdownMenu = (textValue) => {
    const option = document.createElement('option');
    option.classList.add('itemsToMenu', 'fs-16', 'ctg-title');
    option.setAttribute('value', textValue);
    option.innerHTML = textValue;
    dropdownMenu.appendChild(option);
};

const categoryToBox = (textValue) => {
    const h5 = document.createElement('h5');
    h5.classList.add('categoryH2', 'fs-16', 'ctg-title');
    h5.innerHTML = textValue;
    resultBox.appendChild(h5);
    return resultBox;
};

const addRadioButtonsToBox = (expense, price) => {
    const form = document.createElement('form');
    resultBox.appendChild(form);
    const inputRadio = document.createElement('input');
    inputRadio.setAttribute('type', 'checkbox');
    inputRadio.setAttribute('name', expense, price);
    inputRadio.setAttribute('id', expense, price);
    inputRadio.setAttribute('value', expense, price);
    form.appendChild(inputRadio);
    const labelRadio = document.createElement('label');
    labelRadio.innerHTML = `${expense} - ${price}`;
    inputRadio.setAttribute('for', expense, price);
    form.appendChild(labelRadio);
    return resultBox;
};

// Functionality
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
        saveInputValue.push(categoryInput.value);
        btnNewCategory.style.display = 'block';
        dropdownMenu.style.display = 'block';
        saveInputValue.forEach((category) => {
            categoryToBox(category);
            dataToDropdownMenu(category);
        });
    }

    if (expenseInput.value.length > 0 && priceInput.value.length && dropdownMenu.value.length > 0) {
        btnPriceSave.removeAttribute('disabled');
    }
};

const editCategoryValue = (e) => {
    e.preventDefault();
    if (categoryInput.disabled) {
        categoryInput.removeAttribute('disabled');
        btnCategorySave.removeAttribute('disabled');
        btnCategoryEdit.setAttribute('disabled', 'disabled');
        btnNewCategory.style.display = 'none';
        const allItems = document.querySelectorAll('.categoryH2');
        const lastItem = allItems[allItems.length - 1];
        lastItem.remove();
        saveInputValue.pop();
        const menuItes = document.querySelectorAll('.itemsToMenu');
        const lastItemMenu = menuItes[menuItes.length - 1];
        lastItemMenu.remove();
    }
};

const newCategory = (e) => {
    e.preventDefault();
    if (btnNewCategory.style.display === 'block') {
        btnNewCategory.style.display = 'none';
        categoryInput.removeAttribute('disabled');
        categoryInput.value = '';
        btnCategoryEdit.setAttribute('disabled', 'disabled');
        btnCategorySave.removeAttribute('disabled');
        saveInputValue.pop();
    }
};


// Expense

const enableSaveButtonPrice = (e) => {
    e.preventDefault();
    if (expenseInput.value.length > 0 && priceInput.value.length && dropdownMenu.value.length > 0) {
        btnPriceSave.removeAttribute('disabled');
    }
};

const enableSaveButtonExpense = (e) => {
    e.preventDefault();
    if (expenseInput.value.length > 0 && priceInput.value.length && dropdownMenu.value.length > 0) {
        btnPriceSave.removeAttribute('disabled');
    }
};

const getExpenseValue = (e) => {
    e.preventDefault();
    if (expenseInput.value.length > 0 && priceInput.value.length && dropdownMenu.value.length > 0) {
        expenseObject.expense = expenseInput.value;
        expenseObject.price = priceInput.value;
        console.log(expenseObject);
        addRadioButtonsToBox(expenseObject.expense, expenseObject.price);
        expenseInput.value = '';
        priceInput.value = '';

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

// Event Listeners
expenseInput.addEventListener('input', enableSaveButtonExpense);
priceInput.addEventListener('input', enableSaveButtonPrice);
btnIncomeSave.addEventListener('click', getIncomeValue);
btnIncomeEdit.addEventListener('click', editIncomeValue);
btnCategorySave.addEventListener('click', getCategoryValue);
btnCategoryEdit.addEventListener('click', editCategoryValue);
btnNewCategory.addEventListener('click', newCategory);
btnPriceSave.addEventListener('click', getExpenseValue);
btnPriceEdit.addEventListener('click', editExpenseValue);