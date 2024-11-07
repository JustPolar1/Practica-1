let tareas = [];
const formulario = document.getElementById('tarea');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar recarga de la página
    // Ya no me acuerdo para qué guardo las tareas en un array
    const tarea = document.getElementById('task').value;
    tareas.push({ tarea });

    actualizarListaTareas();
    formulario.reset();
});
// No importa jajaja
function actualizarListaTareas() {
    const tareasHTML = document.getElementById('tareas');
    tareasHTML.innerHTML = '';
    
    tareas.forEach((dato, index) => {
        const li = document.createElement('li');
        li.textContent = dato.tarea;

        // Estilo par o impar
        if (index % 2 === 0) {
            li.classList.add('par');
        } else {
            li.classList.add('impar');
        }

        const botonCompletar = document.createElement('button');
        botonCompletar.textContent = 'Completar';
        botonCompletar.classList.add('boton-completar');
        botonCompletar.addEventListener('click', () => moverATerminadas(index));
        
        li.appendChild(botonCompletar);
        tareasHTML.appendChild(li);
    });
}

function moverATerminadas(index) {
    const tareaTerminada = tareas.splice(index, 1)[0];

    const tareasTerminadasHTML = document.getElementById('tareas-terminadas');
    const li = document.createElement('li');
    li.textContent = tareaTerminada.tarea;
    tareasTerminadasHTML.appendChild(li);

    // Para que se ctualice la lista
    actualizarListaTareas();
}
