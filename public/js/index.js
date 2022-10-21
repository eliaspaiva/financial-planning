const btnCategory = document.getElementById('btn-category');
const expenseBox = document.getElementById('expense-box');
const closeBtn = document.getElementById('close-btn');
const closeIcon = document.getElementById('closeicon');

// Functions
const showCategoryButton = () => {
    expenseBox.style.display = 'block';
};

const closeCategoryButton = () => {
    expenseBox.style.display = 'none';
};

const closeCategoryIcon = () => {
    expenseBox.style.display = 'none';
}; 

// Event Listeners
btnCategory.addEventListener('click', showCategoryButton);
closeBtn.closeBtn('click', closeCategoryButton);
closeIcon.addEventListener('click', closeCategoryIcon);