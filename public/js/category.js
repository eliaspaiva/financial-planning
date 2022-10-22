const income = document.getElementById('income');
const btnCategories = document.getElementById('btn-categories');
const categoriesBox = document.getElementById('expense-box');
const iconClose = document.getElementById('closeicon');
const closeBtn = document.getElementById('close-btn');

const getIncomeValue = () => console.log(income.value);

const showCategories = () => {
    categoriesBox.style.display = 'block';
};

const closeCategoryButton = () => {
    categoriesBox.style.display = 'none';
};

const closeCategoryIcon = () => {
    categoriesBox.style.display = 'none';
}; 

income.addEventListener('input', getIncomeValue);
btnCategories.addEventListener('click', showCategories);
iconClose.addEventListener('click', closeCategoryButton);
closeBtn.addEventListener('click', closeCategoryIcon);