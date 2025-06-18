const { registrar, leer, borrar } = require("./operaciones.js");

// INSTRUCCIONES EN EL README.MD

// tomamos los datos ingresados de la terminal
const operacion = process.argv[2];
// process.arv[0] ==> node
// process.arv[1] ==> archivo.js
// process.arv[2] ==> operacion

// destructuring de los datos ingresados
const [nombre, edad, tipo, color, enfermedad] = process.argv.slice(3);

// destructuring para mi función de borrar
const [id] = process.argv.slice(3);

if (operacion === "registrar") {
  registrar(nombre, edad, tipo, color, enfermedad);
}
if (operacion === "leer") {
  leer(nombre);
}
if (operacion === "borrar") {
  borrar(id);
}
