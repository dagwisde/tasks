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

	const Done = done ? checked : unchecked;
	const Line = done ? line_through : '';

	const taskItem = `
    <li class="item">
                    <i class=" ${Done} fa-square icon btn fa-fw" id="${id} " op="complete"></i>
                    <h3 class="text ${Line}">${task}</h3>
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

// Complete a task
function completeTask(element) {
	element.classList.toggle(checked);
	element.classList.toggle(unchecked);
	element.parentNode.querySelector('.text').classList.toggle(line_through);

	list[element.id].done = list[element.id].done ? false : true;
}

// Remove a task
function deleteTask(element) {
	element.parentNode.parentNode.removeChild(element.parentNode);

	list[element.id].remove = true;
}

// Target list items for remove or complete
list.addEventListener('click', function(event) {
	const element = event.target; // What was clicked

	const elementOperation = element.attributes.op.value;

	if (elementOperation === 'complete') {
		completeTask(element);
	} else if (elementOperation === 'delete') {
		deleteTask(element);
	}
});
