const mongoose = require('mongoose');
const {Schema} = mongoose;

const Proyecto= new Schema({
  
    id: Number,
    Empresa: String,
    nombre: String,
    email: String,
    salary: Number,
    ubicacion: String,
    fecha_public: Date,
     fecha_max_re: Date,
     carreras_afin: [],
         
    // esto ultimo que coloco es para que identifique a la coleccion en la
    // que deseo trabajar, antes me creaba una nueva.
  }, {collection: 'Proyectos'});

// El esquema ayuda a decirle a mongo db como van a lucir los datos

// CREANDO MODELOS:

let M_Proyectos=mongoose.model('M_Proyecto',Proyecto);
module.exports = M_Proyectos;