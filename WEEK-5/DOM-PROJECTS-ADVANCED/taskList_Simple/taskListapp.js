// define UI variables
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

// call function: load all event listeners
loadEventListeners();

// create function: load all event listeners
function loadEventListeners(){
	// add task event
	form.addEventListener('submit', addTask);

	// remove task event
	taskList.addEventListener('click', removeTask);

	// clear all tasks
	clearBtn.addEventListener('click', clearAllTasks);

}

// Add task function
function addTask(e){

	if (taskInput.value === '') {
		alert('Add a task!');
	}else{
        // create li element
        const li = document.createElement('li');
        li.className = 'collection-item';
        // create a text node and append it to li
        li.innerHTML = taskInput.value;
        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item';
        // Add icon html
        link.innerHTML = '<span> x </span>';
        // Append the link to li
        li.appendChild(link);

        // Append li to UL
        taskList.appendChild(li);

        // clear input
        taskInput.value = '';
    }

	e.preventDefault();
}

// Remove task function
function removeTask(e){
	// we targeting each task, it gives us <span> element, but we need to reach 
	// li element, which is parent of <a> element
	//console.log(e.target);
	if(e.target.parentElement.classList.contains('delete-item')){
		if(confirm('Are you sure?')){
			e.target.parentElement.parentElement.remove();
		}
	}
}

// Clear all tasks
function clearAllTasks(e){
	// version-1
	//taskList.innerHTML = "";
	// second version using loop
	while(taskList.firstChild){
		taskList.removeChild(taskList.firstChild);
    }
    
    e.preventDefault();
}