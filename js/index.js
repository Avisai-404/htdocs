// Selectors

const itemButton = document.querySelector('.item.button');
const itemButton2 = document.querySelector('.item.button2');
const tableContainer = document.querySelector('.table-container');

// Listeners with functions

itemButton.addEventListener('click', function () {
    tableContainer.style.display = 'none';
})

itemButton2.addEventListener('click', function () {
    tableContainer.style.display = 'grid';
})

