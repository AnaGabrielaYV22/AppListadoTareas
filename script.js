
const FechaNumero = document.getElementById('FechaNumero');
const FechaText = document.getElementById('FechaText');
const FechaMeses = document.getElementById('FechaMeses');
const FechaAño = document.getElementById('FechaAño');


const tasksContainer = document.getElementById('tasksContainer')


const setDate = () => {
    const date = new Date();

    FechaNumero.textContent = date.toLocaleString('es', { day: 'numeric' });
    FechaText.textContent = date.toLocaleString('es', { weekday: 'long' });
    FechaMeses.textContent = date.toLocaleString('es', { month: 'short' });
    FechaAño.textContent = date.toLocaleString('es', { year: 'numeric' });
};

const AgregarNuevaTarea = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if (!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {

    const done = [];
    const toDo = [];

    tasksContainer.childNodes.forEach(el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];

}

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))

}

setDate();