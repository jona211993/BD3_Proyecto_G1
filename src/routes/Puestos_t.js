// EN RUTAS  ES  DONDE IRA TODO EL TRABAJO DEL SERVIDOR
// DONDE SE ESTARA ESCUCHANDO LO QUE PIDA EL NAVEGADOR

const express = require ('express');
const router = express.Router();

// aqui voy a requerir mi modelo creado , en este caso fue el modelo Empleado
const PUESTOS = require('../models/m_puesto_t');

// Definimos las rutas::
router.get('/', async (req,res)=> {
         const p  = await PUESTOS.find();
         res.json(p);
         
});


/*router.post('/',async(req,res) =>{
        const { nombre,mes} = req.body;        
       // console.log(nombre);
         let response= await E.create({nombre, mes})
         console.log(response) 
        return res.json({
                status :200,
                nombre,
                mes
        })
});*/
module.exports= router;