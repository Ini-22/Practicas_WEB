function agregarTarea() {
    const input = document.getElementById("nuevaTarea");
    const textoTarea = input.value.trim();

    if (textoTarea === "") return;

    const lista = document.getElementById("listaTareas");

    // Crear elementos
    const li = document.createElement("li");
    const spanTexto = document.createElement("span");
    spanTexto.textContent = textoTarea;

    // Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = () => li.remove();

    // Botón completar
    const btnCompletar = document.createElement("button");
    btnCompletar.textContent = "Completar";
    btnCompletar.onclick = () => {
        li.classList.toggle("completada");
    };

    // Añadir elementos al li
    li.appendChild(spanTexto);
    li.appendChild(btnEliminar);
    li.appendChild(btnCompletar);

    // Añadir li a la lista
    lista.appendChild(li);

    // Limpiar input
    input.value = "";
}

