const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();


// CONECTANDO A LA BD MONGO ATLAS
const url = (' mongodb+srv://Jonatan_21:123@cluster0.sqvww.mongodb.net/GesEmp?retryWrites=true&w=majority');
mongoose.connect(url, { dbName: 'GesEmp' })
  .then(() => console.log('Conectado a Mongo Atlas'))
  .catch((e) => console.log('Error de conexion' + e));

// SETTING
app.set('port', process.env.PORT || 4000);

// MIDDLEWARES: son funciones
app.use(morgan('dev'));
// este nos ayuda a entender los json que vienen desde el navegador
app.use(express.json());


// ROUTES
// Enlazando el archivo Empleadoss:
// Tambien lee estoy diciendo que todas las rutas van a empezar con / Empleados
app.use('/Postulantes', require('./routes/Postulantes'));

app.use('/Empresas', require('./routes/Empresas'));

app.use('/Proyectos', require('./routes/Proyectos'));

app.use('/Puestos', require('./routes/Puestos_t'));

// STATICS FILES  
// Configurando para que mi carpeta public vaya al navegador:
app.use(express.static(__dirname + '/public'));

// SERVER  ESCUCHANDO

app.listen(app.get('port'), () => {
  console.log('Servidor en puerto', app.get('port'));
})