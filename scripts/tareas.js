let tareas = [];

const formulario = document.getElementById('tarea');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar recarga de la página
    
    const tarea = document.getElementById('task').value;

    tareas.push({ tarea });

    const tareasHTML = document.getElementById('tareas');
    tareasHTML.innerHTML = '';
    
    tareas.forEach((dato) => {
        const li = document.createElement('li');
        li.textContent = `${dato.tarea}`;
        tareasHTML.appendChild(li);
    });
    
    formulario.reset();
});
