const fs = require("fs");


let listadoTareas = {
    archivo: "./app-tareas/tareas.json",
    leerArchivo: function(){
        return JSON.parse(fs.readFileSync(this.archivo, "utf-8"))
    },
    escribirJSON:function(array){
        fs.writeFileSync("./app-tareas/tareas.json", JSON.stringify(array), "utf-8")
    },
    guardarTarea: function (objetoTarea){
        let nuevaTarea = this.leerArchivo()
        nuevaTarea.push(objetoTarea)
        this.escribirJSON(nuevaTarea)
    },
    filtrarPorEstado: function (estado){
        let listadoDeTareas = this.leerArchivo();
        let tareasFiltradas = listadoDeTareas.filter((x) =>
            x.estado === estado)
            return tareasFiltradas;
    }
}

module.exports = listadoTareas;