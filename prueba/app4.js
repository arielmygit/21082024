let opciones=prompt(`
    Elija una opcion:
    1: Libros
    2: Peliculas
    3: Juegos
`);

switch(opciones){
    case "1": 
        console.log("Quibole con el SAT");
    break;
    case "2": 
        console.log("Scary movie");
    break;
    case "3": 
        console.log("Fortnite");
    break;
    default:
        console.log("Opcion invalida")

}
