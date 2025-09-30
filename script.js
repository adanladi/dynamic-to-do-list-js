// Wait for the DOM content to load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    /**
     * Function to load tasks from Local Storage
     */
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    /**
     * Function to add a new task to the todo list
     * @param {string} taskText - The text content of the task
     * @param {boolean} save - Whether to save to localStorage (default: true)
     */
    function addTask(taskText, save = true) {
        // Get the text from the input field and trim whitespace
        const text = taskText.trim();

        // Validate that the task text is not empty
        if (text === '') {
            alert('Please enter a task');
            return;
        }

        // Create a new list item element
        const listItem = document.createElement('li');
        
        // Set the text content of the list item
        listItem.textContent = text;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-btn');
        removeButton.textContent = 'Remove';

        // Add click handler to remove button
        removeButton.onclick = () => {
            taskList.removeChild(listItem);
            updateLocalStorage();
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Save to localStorage if requested
        if (save) {
            updateLocalStorage();
        }
    }

    /**
     * Function to update Local Storage with current tasks
     */
    function updateLocalStorage() {
        const tasks = Array.from(taskList.children)
            .map(li => li.textContent.replace(/Remove$/, '').trim());
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load existing tasks from Local Storage
    loadTasks();

    // Add event listener for the add task button
    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
        taskInput.value = '';
    });

    // Add event listener for Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
            taskInput.value = '';
        }
    });
});
