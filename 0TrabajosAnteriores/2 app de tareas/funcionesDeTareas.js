let fs = require("fs");


let listadoTareas = {
    archivo: "tareas.json",
    leerArchivo: function(){
        let tareas = fs.readFileSync("./app-tareas/tareas.json","utf-8");
        return JSON.parse(tareas)
    }
}

module.exports = (listadoTareas)