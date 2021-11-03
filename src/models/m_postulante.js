const mongoose = require('mongoose');
const { Schema } = mongoose;

const Postulante = new Schema({

  user_id: Number,
  user: String,
  password: String,
  dni: String,
  name: String,
  lastname: String,
  edad: Number,
  email: String,
  celular: String,
  direccion: String,
  formacion: String,
  centro_e: String,
  carrera: String,

  // esto ultimo que coloco es para que identifique a la coleccion en la
  // que deseo trabajar, antes me creaba una nueva.
}, { collection: 'Postulantes' });

// El esquema ayuda a decirle a mongo db como van a lucir los datos

// CREANDO MODELOS:

let M_Postulantes = mongoose.model('M_Postulante', Postulante);
module.exports = M_Postulantes;