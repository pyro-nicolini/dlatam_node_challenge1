const fs = require("fs");

// citas de ejemplo
let citas = [
  {
    id: 1,
    nombre: "pedrito",
    edad: 5,
    tipo: "perro",
    color: "cafe",
    enfermedad: "tos",
  },
  {
    id: 2,
    nombre: "japon",
    edad: 7,
    tipo: "gato",
    color: "negro",
    enfermedad: "vomitos",
  },
  {
    id: 3,
    nombre: "ricardo",
    edad: 3,
    tipo: "loro",
    color: "verde",
    enfermedad: "fiebre",
  },
];

// variable para el nombre
let archivo = "citas.json";

// si no existe o si lo eliminamos, lo creamos desde nuestra BASE de ejemplos
if (!fs.existsSync(archivo)) {
  fs.writeFileSync(archivo, JSON.stringify(citas, null, 2));
}

/* MIS FUNCIONES */
// REGISTRAR (...)
const registrar = (nombre, edad, tipo, color, enfermedad) => {
  const data = JSON.parse(fs.readFileSync(archivo, "utf-8"));
  const ultimoID = Math.max(0, ...data.map((c) => c.id || 0)); // Math.max  devuelve el numero Max entre sus parametros.
  const nuevaCita = {
    id: ultimoID + 1,
    nombre,
    edad: parseInt(edad), // aseguro un numero en la edad
    tipo,
    color,
    enfermedad,
  };
  data.push(nuevaCita);
  fs.writeFileSync(archivo, JSON.stringify(data, null, 2));
  console.log(`Nueva cita de ${nuevaCita.nombre} en registro ${nuevaCita.id}`);
};

// LEER O LEER(name) //  lee todas las citas o solo las con el mismo nombre
const leer = (nombre) => {
  if (!fs.existsSync(archivo)) {
    console.log("no hay citas registradas.");
    return;
  }
  if (fs.existsSync(archivo)) {
    const data = fs.readFileSync(archivo, "utf8");
    citas = JSON.parse(data);
  }
  if (citas.length === 0) {
    console.log("sin registros.");
    return;
  }
  if (!nombre) {
    // si no tiene nombre muestra todo
    console.log("las citas son las siguientes:");
    citas.forEach((cita) => {
      console.log(
        `cita ID: ${cita.id}, ${cita.nombre}, ${cita.edad} años, ${cita.tipo}, ${cita.color}, ${cita.enfermedad}`
      );
    });
    return;
  }
  const coincidencias = citas.filter((cita) => cita.nombre === nombre);
  if (coincidencias.length === 0) {
    console.log(`sin coincidencias para "${nombre}".`);
    return;
  }
  coincidencias.forEach((cita, index) => {
    console.log(
      `coincidencia N°${index + 1}: ${cita.nombre}, ${cita.edad} años, ${
        cita.tipo
      }, ${cita.color}, ${cita.enfermedad}`
    );
  });
};

// BORRAR(id) elimina una cita con el id
const borrar = (id) => {
  const citas = fs.readFileSync(archivo, "utf-8");
  let datos = JSON.parse(citas);
  const idNumerico = parseInt(id);
  datosFiltrados = datos.filter((cita) => cita.id !== idNumerico); // devuelve todas las citas menos la 'buscada'
  const coincidencias = datos.filter((cita) => cita.id === idNumerico);
  if (coincidencias.length === 0) {
    console.log(`No existe el registro ${id}.`);
    return;
  }
  fs.writeFileSync(archivo, JSON.stringify(datosFiltrados, null, 2));
  console.log(`Se eliminó la cita con ID ${idNumerico}`);
};

module.exports = { registrar, leer, borrar };