// Select elements
const dateElement = document.querySelector('#date');

// Show today's date in header
const dateOptions = {
    month: 'long',
    weekday: 'short',
    day: 'numeric'
};

const today = new Date();

dateElement.innerHTML = today.toLocaleDateString('en-US', dateOptions);