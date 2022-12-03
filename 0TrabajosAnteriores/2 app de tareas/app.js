let archivo = require("./funcionesDeTareas")
let arrayDeTareas = archivo.leerArchivo();
let process = require("process")

let accion = process.argv[2]

switch (accion) {
    case "listar":
        console.log("listado de tareas");
        console.log("----------------------");
        for (let i = 0; i < arrayDeTareas.length; i++) {
            console.log(`${i+1} - ${arrayDeTareas[i].titulo} - ${arrayDeTareas[i].estado}`);         
        }
        console.log("----------------------");
    break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción.");
    break;
    default:
        console.log("No entiendo qué quieres hacer.");
        break;
}



