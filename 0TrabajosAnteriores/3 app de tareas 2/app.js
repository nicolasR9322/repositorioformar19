let archivo = require("./funcionesDeTareas")

let process = require("process")

let accion = process.argv[2]

switch (accion) {
    case "listar":
        console.log("listado de tareas");
        console.log("----------------------");
          let arrayDeTareas = archivo.leerArchivo();
     arrayDeTareas.forEach((x, i) => {
         console.log(`${i+1}. ${x.titulo} - ${x.estado}`)
     });
         console.log("----------------------");
    break;
    case "crear":
        let titulo = process.argv[3];
            if(typeof titulo === "undefined"){
                console.log("Debes pasar un titulo de tareas");
                return
            }
            console.log('------------------');
            let tarea = {
                titulo,
                estado: "pendiente",
            }
            archivo.guardarTarea(tarea)
            console.log("tarea creada exitosamente");
            console.log('------------------');
    break;
    case "filtrar":
        let estado = process.argv[3];
        let tareasFiltradas = archivo.filtrarPorEstado(estado);
        console.log("lista de tareas filtradas por "+ estado);
        console.log('------------------');
        tareasFiltradas.forEach((x, i) => {
            console.log(`${i+1}. ${x.titulo} - ${x.estado}`)
        })
        console.log('------------------');
    break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción.");
    break;
    default:
        console.log("No entiendo qué quieres hacer.");
        break;
}

