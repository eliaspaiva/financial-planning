/* eslint-disable max-lines-per-function */
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
const btnBoxSave = document.getElementById('btn-box-save');
const dropdownMenu = document.getElementById('dropdown');
const box = document.getElementById('box');
const resultBox = document.getElementById('resultBox');
const boxSaveBtn = document.getElementById('btn-box-save');


// Empty Elements
const saveInputValue = [];
const dropDownValue = [];
const numbers = [];
const uniqueChars = [];
const checkExpense = [];

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
    
const dataToDropdownMenu = (textValue) => {
    const option = document.createElement('option');
    option.classList.add('itemsToMenu', 'fs-16', 'ctg-title');
    option.setAttribute('value', textValue);
    bigFirstLetter(textValue, option);
    dropdownMenu.appendChild(option);
};
   

const iconsNextToCheckbox = () => {
    const divForIcons = document.createElement('div');
    const iconRemove = document.createElement('i');
    divForIcons.classList.add('ctn-form-icons');
    iconRemove.classList.add('fa-solid');
    iconRemove.classList.add('fa-trash');
    divForIcons.appendChild(iconRemove);
    return divForIcons;
};

const createInputAndLabel = (element1, element2) => {
    const divForInputLabel = document.createElement('div');
    divForInputLabel.classList.add('ctn-form-input-label');
    const inputRadio = document.createElement('input');
    inputRadio.setAttribute('type', 'checkbox');
    inputRadio.setAttribute('name', element1, element2);
    inputRadio.setAttribute('id', element1, element2);
    inputRadio.setAttribute('value', element1, element2);
    divForInputLabel.appendChild(inputRadio);
    const labelRadio = document.createElement('label');
    labelRadio.classList.add('fs-16', 'fw-4', 'margin0');
    labelRadio.innerHTML = `${element1} - ${element2}${'€'}`;
    inputRadio.setAttribute('for', element1, element2);
    divForInputLabel.appendChild(labelRadio);
    return divForInputLabel;
};


const addcheckBoxToBox = (expense, price) => {
    const form = document.createElement('form');
    form.classList.add('form-flex');
    form.appendChild(createInputAndLabel(expense, price));
    form.appendChild(iconsNextToCheckbox());
    return form;
};

const categoryToBox = (textValue) => {
    const divForH5 = document.createElement('div');
    divForH5.classList.add('parentH5');
    resultBox.appendChild(divForH5);
    const div = document.createElement('div');
    div.classList.add('categoryH2', 'fs-18', 'ctg-title', 'fw-6', 'margin-bottom');
    div.setAttribute('id', 'parent');
    bigFirstLetter(textValue, div);
    divForH5.appendChild(div);
    return resultBox;
};

const saveIncomeValue = (e) => {
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
    if (expenseInput.value.length > 0 && priceInput.value.length > 0 && dropdownMenu.value.length > 0) {
        const parentDiv = document.querySelectorAll('#parent');
        const arrayForParent = Array.from(parentDiv);
        const valueInTheDropdown = changeCategory().firstChild;
        const dropdownContent = valueInTheDropdown.textContent.toUpperCase();
        const findRightDiv = arrayForParent.find(element => element.childNodes[0].textContent.toUpperCase() == dropdownContent);
        if (checkExpense.includes(expenseInput.value)) {
            alert('Item Cannot Be Repeated');
        } else {
            findRightDiv.appendChild(addcheckBoxToBox(expenseInput.value, priceInput.value));
            checkExpense.push(expenseInput.value);
        }
    }
    expenseInput.value = '';
    priceInput.value = '';
    box.style.display = 'block';
    btnBoxSave.style.display = 'block';
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

// Box

const removeIcon = (e) => {
    const event = e.target;
    if (event.classList.contains('fa-trash')) {
        const parent = event.parentElement;
        const parentPreviousSibling = parent.previousSibling;
        console.log(parentPreviousSibling);
        event.remove();
        parent.remove();
        parentPreviousSibling.remove();
        const itemSelected = parentPreviousSibling.firstChild.id;
        const getIndexNumber = checkExpense.findIndex((e => e.toLowerCase() == itemSelected.toLowerCase()));
        checkExpense.splice(getIndexNumber, 1);
    }
};

const saveBox = () => {
// do nothing
};

// Event Listeners
dropdownMenu.addEventListener('input', changeCategory);
expenseInput.addEventListener('input', enableSaveButtonExpense);
priceInput.addEventListener('input', enableSaveButtonPrice);
btnIncomeSave.addEventListener('click', saveIncomeValue);
btnIncomeEdit.addEventListener('click', editIncomeValue);
btnCategorySave.addEventListener('click', getCategoryValue);
btnCategoryEdit.addEventListener('click', editCategoryValue);
btnNewCategory.addEventListener('click', newCategory);
btnPriceSave.addEventListener('click', getExpenseValue);
btnPriceEdit.addEventListener('click', editExpenseValue);
box.addEventListener('click', removeIcon);
boxSaveBtn.addEventListener('click', saveBox);