// Select elements
const dateElement = document.querySelector('#date');
const clear = document.querySelector('.clear');
const taskList = document.querySelector('#task-list');
const input = document.querySelector('#input');

// Show today's date in header
const dateOptions = {
	month: 'long',
	weekday: 'short',
	day: 'numeric'
};

const today = new Date();

dateElement.innerHTML = today.toLocaleDateString('en-US', dateOptions);

// Storage variables
let list = [],
	id;

// Class toggle variables
const checked = 'fas';
const unchecked = 'far';
const line_through = 'lineThrough';

// Add task to list
function addTask(task, id, done, remove) {
	// Back out if set to remove
	if (remove) {
		return;
	}

	const DONE = done ? checked : unchecked;
	const LINE = done ? line_through : '';

	const taskItem = `
    <li class="item">
                    <i class=" ${DONE} fa-square icon btn fa-fw" id="${id} " op="complete"></i>
                    <h3 class="text ${LINE}">${task}</h3>
                    <i class="fas fa-trash icon btn fa-fw" id="${id}" op="delete"></i>
                </li> 
    `;

	taskList.insertAdjacentHTML('beforeend', taskItem);
}

document.addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		const task = input.value;

		// Check if input is empty
		if (task) {
			addTask(task, id, false, false);

			list.push({
				name: task,
				id: id,
				done: false,
				remove: false
			});

			id++;
		}

		input.value = '';
	}
});
