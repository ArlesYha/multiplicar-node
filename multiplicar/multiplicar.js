const fs = require('fs');
const colors = require("colors")

let listarTabla = (data) => {
    return scriptTabla({
        base: data.base,
        limite: data.limite,
        type: data.comando
    })
}

// module.exports.crearArchivo
let crearArchivo = (data) => {
    return scriptTabla({
        base: data.base,
        limite: data.limite,
        type: data.comando
    })
}

const scriptTabla = (info) => {
    return new Promise((resolve, reject) => {
        if(!Number(info.base) && Number(info.limite)){
            reject(`El valor "BASE" introducido ${info.base} no es un número`)
            return
        }else if (Number(info.base) && !Number(info.limite)) {
            reject(`El valor "LÍMITE" introducido ${info.limite} no es un número`)
            return
        }else if (!Number(info.base) && !Number(info.limite)) {
            reject(`Tanto el valor "BASE" (${info.base}) como "LÍMITE" (${info.limite}) introducidos, no son numéricos`)
            return
        } else {
            let data = `Listado de la tabla del ${info.base} es: \n`
            for (let i = 1; i <= info.limite; i++) {
                data += `${info.base} * ${i} = ${info.base * i}\n`
            }
            
            if (info.type == "listar") 
                return resolve(data)

            fs.writeFile(`tablas/tabla-${info.base}.txt`, data, (err) => {
                if (err) reject(err);
                else resolve(`tabla-${info.base}.txt`.green)
            });
        }
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}