// const { deepStrictEqual } = require('assert');
// requireds
// const fs = require('fs');
// const fs = require('fs');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')
const argv = require("./config/yargs").argv
const colors = require("colors")
// let base = "9"

// console.log(argv)
let comando = argv._[0]

switch (comando) {
    case "listar":
        listarTabla({
            base: argv.base,
            limite: argv.limite,
            comando
        })
        .then(lista => {
            console.log(lista.green)
        })
        .catch(err => {
            console.log(err)
        })
        break;

    case "crear":
        crearArchivo({
            base: argv.base,
            limite: argv.limite,
            comando
        })
        .then(archivo => {
            console.log(`Archivo creado: ${archivo}`);
        })
        .catch(err => {
            console.log(err)
        })
        break;
    
    default:
        console.log("Comando no reconocido");
}