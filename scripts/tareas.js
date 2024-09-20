let tareas = [];

const formulario = document.getElementById('tarea');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar recarga de la página
    
    const tarea = document.getElementById('task').value;

    tareas.push({ tarea });

    const tareasHTML = document.getElementById('tareas');
    tareasHTML.innerHTML = '';
    
    tareas.forEach((dato, index) => {
        const li = document.createElement('li');
        if (index % 2 == 0){
            li.classList.add('par');
        }
        else {
            li.classList.add('impar');
        }
        li.textContent = `${dato.tarea}`;
        tareasHTML.appendChild(li);
    });
    
    formulario.reset();
});
