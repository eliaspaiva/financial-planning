const income = document.getElementById('income');
const categoriesBox = document.getElementById('expense-box');
const iconClose = document.getElementById('icon-close');

const closeBtn = document.getElementById('close-btn');

const getIncomeValue = () => console.log(income.value);

const closeCategoryButton = () => {
    categoriesBox.style.display = 'none';
};

const closeCategoryIcon = () => {
    categoriesBox.style.display = 'none';
}; 

income.addEventListener('input', getIncomeValue);
iconClose.addEventListener('click', closeCategoryButton);
closeBtn.addEventListener('click', closeCategoryIcon);