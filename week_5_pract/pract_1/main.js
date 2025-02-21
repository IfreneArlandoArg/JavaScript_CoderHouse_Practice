const textoSaludar = document.getElementById(`textoSaludar`);


//Guardar localStorage...
btnGuardarNombre.addEventListener("click", () => {
    const nombre = prompt("Ingrese su nombre :");

    if(nombre){
        localStorage.setItem("nombreUsuario", nombre);

        textoSaludar.innerHTML = `¡Hola ${nombre}!`;

    }
    else{
        alert("Por favor ingrese un nombre");
    }

        
});

//Get nombre de localStorage
btnObtenerNombre.addEventListener("click", () => {
    const nombre = localStorage.getItem("nombreUsuario");

    if(nombre){
        textoSaludar.textContent = `¡Hola ${nombre}!`;
    }
    else{
        alert(`No hay nombre de usuario guardado en localStorage`);
    }
});


//Remove nombre de localeStorage
btnEliminarNombre.addEventListener("click", () => {
    localStorage.removeItem("nombreUsuario");
    textoSaludar.textContent = `¡Hola!`;
});