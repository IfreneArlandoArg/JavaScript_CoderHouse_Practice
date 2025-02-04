function SchemaLibro(Autor, Titulo)
{
    return {Autor, Titulo}
}

function AgregarLibro(Autor, Titulo)
{
    libros.push(SchemaLibro(Autor, Titulo));

    console.log(`¡${Titulo}, Agregado!`);

    
}

function UsuarioAgregarLibro()
{
    let autor = prompt("Ingresé Nombre del Autor :");
    let titulo = prompt("Ingresé Titulo del Libro :");

    AgregarLibro(autor, titulo);
}

function MostrarLibro(Libro)
{
    return `${Libro.Titulo}, ${Libro.Autor}.`;   
}

function ListarLibros(Libros)
{
    let textoAlerta = "Libros disponibles (Titulo, Autor) :\n\n";
    Libros.forEach(libro => {
        textoAlerta += MostrarLibro(libro) + "\n";
    });

    alert(textoAlerta);

}


let libros = [
    {Autor : "J.K. Rowling", Titulo :"Harry Potter"}
];




let menu = parseInt(prompt(`Elige Opereción :\n1 - Agregar Libro. \n2 - Listar Libros. \n3 - Salir..`));


while (menu !== 3) {

    switch (menu) 
    {
        case 1:
            UsuarioAgregarLibro();
            break;
        case 2:
            ListarLibros(libros);
            break;
        default :
            alert(`Numero fuera de rango de opciones posibles...`);
            break;

    
    }



    menu = parseInt(prompt(`Elige Opereción :\n1 - Agregar Libro. \n2 - Listar Libros. \n3 - Salir..`)); 

}