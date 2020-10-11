const argv = require("yargs")
.command("listar", 
"Imprime en consola la tabla de multiplicar", 
{
    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: 10
    }
})
.help()
.argv

let comando = argv._[0]

switch (comando) {
    case "listar":
        console.log("listar")
        break;

    case "crear":
        console.log("crear");
        break;
    
    default:
        console.log("Comando no reconocido");
}

// console.log("Límite", argv.limite);
// console.log(argv);