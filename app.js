// app.js

document.addEventListener('DOMContentLoaded', () => {
    const userName = "Riza Dianil Iman";
    const userJob = "Software Developer";
    document.getElementById('userName').textContent = userName;
    document.getElementById('userJob').textContent = userJob;

    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const doneList = document.getElementById('doneList');
    const prioritySelect = document.getElementById('prioritySelect');
    const deleteAllBtn = document.getElementById('deleteAllBtn');
    const currentDate = new Date().toLocaleDateString();
    document.getElementById('currentDate').textContent = currentDate;

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        const priority = prioritySelect.value;
        if (taskText !== "") {
            const listItem = createTaskElement(taskText, priority, currentDate);

            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    }

    function createTaskElement(taskText, priority, date) {
        const listItem = document.createElement('li');
        
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `<input type="checkbox"><span>${taskText} [${priority}] - ${date}</span>`;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        taskItem.querySelector('input[type="checkbox"]').addEventListener('change', (event) => {
            if (event.target.checked) {
                taskItem.classList.add('task-done');
                doneList.appendChild(listItem);
            } else {
                taskItem.classList.remove('task-done');
                taskList.appendChild(listItem);
            }
        });

        listItem.appendChild(taskItem);
        listItem.appendChild(deleteBtn);
        return listItem;
    }

    deleteAllBtn.addEventListener('click', () => {
        taskList.innerHTML = '';
        doneList.innerHTML = '';
    });
});
