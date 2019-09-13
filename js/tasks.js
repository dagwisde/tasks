// Select elements
const dateElement = document.querySelector('#date');
const clear = document.querySelector('.clear');
const taskList = document.querySelector('#list');
const input = document.querySelector('#input');

// Storage variables
let list, id;

// Class toggle variables
const check = 'fas';
const uncheck = 'far';
const line_through = 'lineThrough';

// Function to add task


// Show today's date in header
const dateOptions = {
    month: 'long',
    weekday: 'short',
    day: 'numeric'
};

const today = new Date();

dateElement.innerHTML = today.toLocaleDateString('en-US', dateOptions);