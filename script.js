// Select necessary elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add event listener to the Add button
addTaskBtn.addEventListener('click', addTask);

// Add task to the list
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create new task item
    const li = document.createElement('li');
    li.classList.add('task');

    // Add task text
    const span = document.createElement('span');
    span.textContent = taskText;

    // Create buttons for task actions (Edit, Delete)
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('task-buttons');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', () => editTask(li));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(li));

    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);

    // Toggle task completion
    li.addEventListener('click', toggleCompletion);

    // Append the text and buttons to the list item
    li.appendChild(span);
    li.appendChild(buttonContainer);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}

// Delete task
function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}

// Toggle task completion
function toggleCompletion(event) {
    // Ensure that only clicking on the list item (not buttons) toggles completion
    if (event.target.tagName !== 'BUTTON') {
        this.classList.toggle('completed');
    }
}

// Edit task
function editTask(taskItem) {
    const span = taskItem.querySelector('span');
    const newText = prompt("Edit your task:", span.textContent);

    if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
    }
}
