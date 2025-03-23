document.addEventListener('DOMContentLoaded', ()=> {
    const taskInput = document.querySelector('#task-input');
    const addTaskBtn = document.querySelector('#add-task-btn');
    const taskList = document.querySelector('#task-list');

    const addTask= () => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if(!taskText){
            return;
        }
        const li= document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="edit-btn"><i
            class= "fa-solid fa-pen"></i></button>
            <button class="delete-btn"><i
            class= "fa-solid fa-trash"></i></button>
        </div>
        `;


        li.querySelector('.checkbox').addEventListener('change', (e) => {
            if(e.target.checked){
                li.querySelector('span').style.textDecoration = 'line-through';
            } else {
                li.querySelector('span').style.textDecoration = 'none';
            }
        });

        li.querySelector('.edit-btn').addEventListener('click', () => {
            const span = li.querySelector('span');
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.innerText;
            li.insertBefore(input, span);
            span.remove();
            input.addEventListener('keypress', (e) => {
                if(e.key === 'Enter'){
                    span.innerText = input.value;
                    input.remove();
                    li.insertBefore(span, li.querySelector('.task-buttons'));
                }
            });
        });
        
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = '';
    }
       
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter'){
            addTask(e);
        }
    });
});