// Wait for the DOM content to load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    /**
     * Function to add a new task to the todo list
     */
    function addTask() {
        // Get the text from the input field and trim whitespace
        const taskText = taskInput.value.trim();

        // Validate that the task text is not empty
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create a new list item element
        const listItem = document.createElement('li');
        
        // Set the text content of the list item
        listItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-btn');  // Changed from className
        removeButton.textContent = 'Remove';

        // Add click handler to remove button
        removeButton.onclick = () => {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener for the add task button
    addButton.addEventListener('click', addTask);

    // Add event listener for Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
