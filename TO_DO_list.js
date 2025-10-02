function descargarTareas() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(respuesta => respuesta.json())
        .then(data => {
            const lista = document.getElementById("lista-tareas");
            lista.innerHTML = ""; // Limpiar lista antes de agregar nuevas

            const primerosDiez = data.slice(0, 10);

            primerosDiez.forEach(tarea => {
                const li = document.createElement("li");
                li.textContent = tarea.title;
                lista.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error al descargar las tareas:", error);
        });
}
