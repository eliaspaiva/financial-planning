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
const btnBoxEdit = document.getElementById('btn-box-edit');
const btnBoxSave = document.getElementById('btn-box-save');
const dropdownMenu = document.getElementById('dropdown');
const box = document.getElementById('box');
const resultBox = document.getElementById('resultBox');

// Empty Elements
const saveInputValue = [];
const expenseObject = {};
const dropDownValue = [];
const numbers = [];
const uniqueChars = [];

// First Letter Capitalized
const bigFirstLetter = (text, attribute) => {
    const toString = text.toString();
    const wordsToArray = toString.split(' ');
    let result = '';
    let fullFirstWord = '';
    let fullSecondWord = '';
    if (wordsToArray.length == 1) {
        wordsToArray.forEach((word) => {
            result = word[0].toUpperCase() + word.substring(1).toLowerCase();
        });
        return attribute.innerHTML = result;
    } {
        const firstWord = wordsToArray.shift();
        fullFirstWord = firstWord[0].toUpperCase() + firstWord.substring(1).toLowerCase();
        const secondWord = wordsToArray[wordsToArray.length - 1];
        fullSecondWord = secondWord[0].toUpperCase() + secondWord.substring(1).toLowerCase();
        return attribute.innerHTML = `${fullFirstWord} ${fullSecondWord}`;
    }
};
    

// Dynamic Html
const dataToDropdownMenu = (textValue) => {
    const option = document.createElement('option');
    option.classList.add('itemsToMenu', 'fs-16', 'ctg-title');
    option.setAttribute('value', textValue);
    bigFirstLetter(textValue, option);
    dropdownMenu.appendChild(option);
};

const addcheckBoxToBox = (expense, price) => {
    const form = document.createElement('form');
    form.classList.add('form-flex');
    const inputRadio = document.createElement('input');
    inputRadio.setAttribute('type', 'checkbox');
    inputRadio.setAttribute('name', expense, price);
    inputRadio.setAttribute('id', expense, price);
    inputRadio.setAttribute('value', expense, price);
    form.appendChild(inputRadio);
    const labelRadio = document.createElement('label');
    labelRadio.classList.add('fs-16', 'fw-4', 'margin0');
    labelRadio.innerHTML = `${expense} - ${price}${'€'}`;
    inputRadio.setAttribute('for', expense, price);
    form.appendChild(labelRadio);
    const createButton = document.createElement('button');
    createButton.innerHTML = 'teste';
    form.appendChild(createButton);
    return form;
};

const categoryToBox = (textValue) => {
    const divForH5 = document.createElement('div');
    divForH5.classList.add('parentH5');
    resultBox.appendChild(divForH5);
    const div = document.createElement('div');
    div.classList.add('categoryH2', 'fs-18', 'ctg-title', 'fw-6', 'margin-bottom');
    bigFirstLetter(textValue, div);
    divForH5.appendChild(div);
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
const getCategoryValueHelper = () => {
    categoryInput.setAttribute('disabled', 'disabled');
    btnCategoryEdit.removeAttribute('disabled');
    btnCategorySave.setAttribute('disabled', 'disabled');
    saveInputValue.push(categoryInput.value);
    btnNewCategory.style.display = 'block';
    dropdownMenu.style.display = 'block';
};


const getCategoryValue = (e) => {
    e.preventDefault();
    if (categoryInput.value.length > 0) {
        getCategoryValueHelper();
        saveInputValue.forEach((category) => {
            if (dropDownValue.includes(category.toUpperCase()))  {
                alert('Item Cannot Be Repeated');
            } else {
                dropDownValue.push(category.toUpperCase());
                dataToDropdownMenu(category);
                categoryToBox(category);
            }
        });
    }
    if (expenseInput.value.length > 0 && priceInput.value.length && dropdownMenu.value.length > 0) btnPriceSave.removeAttribute('disabled');
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
        dropDownValue.pop();
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
    if (expenseInput.value.length > 0 && priceInput.value.length && dropdownMenu.value.length > 0) btnPriceSave.removeAttribute('disabled');
};

const enableSaveButtonExpense = (e) => {
    e.preventDefault();
    if (expenseInput.value.length > 0 && priceInput.value.length && dropdownMenu.value.length > 0) btnPriceSave.removeAttribute('disabled');
};

const changeCategory = () => {
    const currentValue = dropdownMenu.value;
    const allH5Values = document.querySelectorAll('.categoryH2');
    allH5Values.forEach((el => {
        const elInnerHtml = el.innerHTML;
        elInnerHtml.includes('id') ? 'do nothing' : numbers.push(elInnerHtml);
        numbers.forEach((element) => {
            if (!uniqueChars.includes(element)) {
                uniqueChars.push(element);
            }
        });       
    }));
    const getIndexNumber = uniqueChars.findIndex((e => e.toLowerCase() == currentValue.toLowerCase()));
    const elementByIndexNumber = allH5Values[getIndexNumber];
    return elementByIndexNumber;
};

const getExpenseValue = (e) => {
    e.preventDefault();
    if (expenseInput.value.length > 0 && priceInput.value.length && dropdownMenu.value.length > 0) {
        expenseObject.category = dropdownMenu.value;
        expenseObject.expense = expenseInput.value;
        expenseObject.price = priceInput.value;        
        changeCategory().appendChild(addcheckBoxToBox(expenseObject.expense, expenseObject.price));
        expenseInput.value = '';
        priceInput.value = '';
    }
    box.style.display = 'block';
    btnBoxEdit.style.display = 'block';
    btnBoxSave.style.display = 'block';
    btnBoxEdit.removeAttribute('disabled');
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

const editBox = (e) => {
    e.preventDefault();
    if (box.style.display === 'block') {
        
        console.log('oi');
    }
};

// Event Listeners
dropdownMenu.addEventListener('input', changeCategory);
expenseInput.addEventListener('input', enableSaveButtonExpense);
priceInput.addEventListener('input', enableSaveButtonPrice);
btnIncomeSave.addEventListener('click', getIncomeValue);
btnIncomeEdit.addEventListener('click', editIncomeValue);
btnCategorySave.addEventListener('click', getCategoryValue);
btnCategoryEdit.addEventListener('click', editCategoryValue);
btnNewCategory.addEventListener('click', newCategory);
btnPriceSave.addEventListener('click', getExpenseValue);
btnPriceEdit.addEventListener('click', editExpenseValue);
btnBoxEdit.addEventListener('click', editBox);