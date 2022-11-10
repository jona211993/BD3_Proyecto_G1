const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Publicacion = new Schema({
    id_empresa: {type: ObjectId,required: true},
    titulo: String,
    tipo: String,
    modalidad: String,
    descripcion:String,
    experiencia:Number,
    salario:Number,
    duracion:Number,
    duracion_en:String,
    ubicacion: String,
    fecha_public: Date,
    fecha_max_re: Date,
    carrera_afin:String,
    num_postulaciones:Number

  // esto ultimo que coloco es para que identifique a la coleccion en la
  // que deseo trabajar, antes me creaba una nueva.
}, { collection: 'Publicaciones' });

// El esquema ayuda a decirle a mongo db como van a lucir los datos

// CREANDO MODELOS:

let M_Publicaciones = mongoose.model('M_Publicacion',Publicacion);
module.exports = M_Publicaciones;