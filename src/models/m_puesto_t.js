const mongoose = require('mongoose');
const {Schema} = mongoose;

const Puesto_t= new Schema({
  
    id: Number,
    Empresa_id: String,
    nombre: String,
    descripcion: String,
    salary: Number,
    ubicacion: String,
    fecha_public: Date,
    fecha_max_re: Date,
    duracion_anios:Number,
    expe_min_anios: Number,
    modalidad:String,
    Carreras_afin: [],
         
    // esto ultimo que coloco es para que identifique a la coleccion en la
    // que deseo trabajar, antes me creaba una nueva.
  }, {collection: 'Puestos_t'});

// El esquema ayuda a decirle a mongo db como van a lucir los datos

// CREANDO MODELOS:

let M_Puesto_t=mongoose.model('M_Puesto_t',Puesto_t);
module.exports = M_Puesto_t;