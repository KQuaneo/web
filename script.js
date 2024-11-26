// script.js

document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');
    const todoTime = document.getElementById('todo-time');
    const todoList = document.getElementById('todo-list');
    const completedList = document.getElementById('completed-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = todoInput.value;
        const date = todoDate.value;
        const time = todoTime.value;
        addTodo(task, date, time);
        todoForm.reset();
    });

    function addTodo(task, date, time) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task} - ${date} ${time}</span>
            <div>
                <button class="complete-btn">✔️</button>
                <button class="delete-btn">🗑️</button>
            </div>
        `;

        todoList.appendChild(li);

        li.querySelector('.complete-btn').addEventListener('click', () => {
            li.classList.toggle('completed');
            if (li.classList.contains('completed')) {
                completedList.appendChild(li);
            } else {
                todoList.appendChild(li);
            }
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });
    }
});
