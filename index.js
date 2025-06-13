const { registrar, leer } = require('./operaciones.js')

const operacion = process.argv[2];

const [nombre, edad, tipo, color, enfermedad] = process.argv.slice(3);

// const datos = process.argv.slice(3);

// const nombre = datos[0];
// const edad = datos[1];
// const tipo = datos[2];
// const color = datos[3];
// const enfermedad = datos[4];

if(operacion === "registrar"){
registrar(nombre, edad, tipo, color, enfermedad);
}
if(operacion === "leer"){
leer(nombre)
}