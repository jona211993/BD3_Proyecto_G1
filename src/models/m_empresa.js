const mongoose = require('mongoose');
const { Schema } = mongoose;

const Empresa = new Schema({
  nombre: String,
  password: String,
  ruc: String,
  rs: String,
  phone: String,
  email: String,
  direccion: String,
  departamento: String,
  provincia: String,
  distrito: String,

  // esto ultimo que coloco es para que identifique a la coleccion en la
  // que deseo trabajar, antes me creaba una nueva.
}, { collection: 'Empresas' });

// El esquema ayuda a decirle a mongo db como van a lucir los datos

// CREANDO MODELOS:

let M_Empresas = mongoose.model('M_Empresa', Empresa);
module.exports = M_Empresas;