const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <button class="delete-button">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
    saveTasksToLocalStorage();
}
function deleteTask(e) {
    if (e.target.classList.contains('delete-button')) {
        e.target.parentElement.remove();
        saveTasksToLocalStorage();
    }
}
function saveTasksToLocalStorage() {
    const tasks = Array.from(taskList.getElementsByTagName('li')).map(li => li.textContent.trim());
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskText => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(li);
    });
}
addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);
loadTasksFromLocalStorage();
