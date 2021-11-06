const mongoose = require('mongoose');
const {Schema} = mongoose;

const Puesto_t= new Schema({
  
    empresa_id: mongoose.Types.ObjectId,
    nombre: String,
    descripcion: String,
    salary: Number,
    ubicacion: String,
    tiempo_en: String,
    duracion: Number,
    fecha_public: Date,
    fecha_max_re: Date,
    experiencia: Number,
    modalidad:String,
    carreras_afin: [],
         
    // esto ultimo que coloco es para que identifique a la coleccion en la
    // que deseo trabajar, antes me creaba una nueva.
  }, {collection: 'Puestos_t'});

// El esquema ayuda a decirle a mongo db como van a lucir los datos

// CREANDO MODELOS:

let M_Puesto_t=mongoose.model('M_Puesto_t',Puesto_t);
module.exports = M_Puesto_t;