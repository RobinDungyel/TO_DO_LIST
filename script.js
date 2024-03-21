function Add() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();
    if (task) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const label = document.createElement('label');
        label.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', function () {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton);

        if (checkbox.checked) {
            const completedTaskList = document.getElementById('completedTaskList');
            completedTaskList.appendChild(li);
        } else {
            const incompleteTaskList = document.getElementById('incompleteTaskList');
            incompleteTaskList.appendChild(li);
        }

        taskInput.value = '';

        // Add event listener to checkbox to move the list to completed category
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                const incompleteTaskList = document.getElementById('incompleteTaskList');
                incompleteTaskList.removeChild(li);
                const completedTaskList = document.getElementById('completedTaskList');
                completedTaskList.appendChild(li);
            } else {
                const completedTaskList = document.getElementById('completedTaskList');
                completedTaskList.removeChild(li);
                const incompleteTaskList = document.getElementById('incompleteTaskList');
                incompleteTaskList.appendChild(li);
            }
        });
    }
}

document.getElementById('task-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        Add();
    }
});