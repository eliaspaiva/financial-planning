const header = document.getElementById('header');
const btnCategory = document.getElementById('btn-category');
const expenseBox = document.getElementById('expense-box');
const closeBtn = document.getElementById('close-btn');
const closeIcon = document.getElementById('closeicon');


// Functions
const getCurrentMonth = () => {
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    const h1Header = document.createElement('h1');
    h1Header.innerHTML =`${month}, ${year}`;
    header.appendChild(h1Header);
};

const addIncome = () => {
    
}

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
getCurrentMonth();
btnCategory.addEventListener('click', showCategoryButton);
closeBtn.addEventListener('click', closeCategoryButton);
closeIcon.addEventListener('click', closeCategoryIcon);