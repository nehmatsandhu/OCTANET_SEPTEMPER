document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskCategory = document.getElementById('taskCategory');
    const taskDeadline = document.getElementById('taskDeadline');
    const taskPriority = document.getElementById('taskPriority');
    const taskLabel = document.getElementById('taskLabel');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        const category = taskCategory.value;
        const deadline = taskDeadline.value;
        const priority = taskPriority.value;
        const label = taskLabel.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <div><strong>${taskText}</strong></div>
                <div>Category: ${category}</div>
                <div>Deadline: ${deadline}</div>
                <div>Priority: ${priority}</div>
                <div>Label: ${label}</div>
                <button class="delete-task">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';
            taskCategory.value = 'General';
            taskDeadline.value = '';
            taskPriority.value = 'Low';
            taskLabel.value = '';

            const deleteButton = listItem.querySelector('.delete-task');
            deleteButton.addEventListener('click', function () {
                listItem.remove();
            });
        }
    });
});

