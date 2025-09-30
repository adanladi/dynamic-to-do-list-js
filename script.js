function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }
    
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-btn');  // Changed from className
    removeButton.textContent = 'Remove';
    
    removeButton.onclick = () => {
        taskList.removeChild(listItem);
    };
    
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
    taskInput.value = '';
}
        
