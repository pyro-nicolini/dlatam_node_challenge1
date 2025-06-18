const fs = require('fs')

let citas = [];
let archivo = 'citas.JSON';
const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const nuevaCita = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad,
    }
    if (fs.existsSync(archivo)) {
    const data = fs.readFileSync(archivo, 'utf8');
    citas = JSON.parse(data);
    } else {
        fs.writeFileSync(archivo, JSON.stringify(citas, null, 2));
    }
    citas.push(nuevaCita);
    fs.writeFileSync(archivo, JSON.stringify(citas, null, 2));
    console.log(`Nueva cita de ${nuevaCita.nombre}`);
}
    
const leer = (nombre) => {
    if (!fs.existsSync(archivo)) {
        console.log('no hay citas registradas.');
        return;
    }
    if (fs.existsSync(archivo)) {
    const data = fs.readFileSync(archivo, 'utf8');
    citas = JSON.parse(data);
    }
    if (citas.length === 0) {
        console.log('sin registros.');
        return;
    }
    if (!nombre) {
        console.log('las citas son las siguientes:')
        citas.forEach((cita, index) => {
            console.log(`cita N°${index + 1}: ${cita.nombre}, ${cita.edad} años, ${cita.tipo}, ${cita.color}, ${cita.enfermedad}`);
        });
        return;
    }
    const coincidencias = citas.filter(cita => cita.nombre === nombre);
    if (coincidencias.length === 0) {
        console.log(`sin coincidencias para "${nombre}".`);
        return;
    }
    coincidencias.forEach((cita, index) => {
        console.log(`coincidencia N°${index + 1}: ${cita.nombre}, ${cita.edad} años, ${cita.tipo}, ${cita.color}, ${cita.enfermedad}`);
    });
};

module.exports = {registrar, leer}