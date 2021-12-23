const mongoose = require('mongoose');
const { Schema } = mongoose;

const Administrador = new Schema({
  usuario: String,
  contrasenia: String,
  // esto ultimo que coloco es para que identifique a la coleccion en la
  // que deseo trabajar, antes me creaba una nueva.
}, { collection: 'Administradores' });

// El esquema ayuda a decirle a mongo db como van a lucir los datos

// CREANDO MODELOS:

let M_Administradores = mongoose.model('M_Administradores', Administrador);
module.exports = M_Administradores;