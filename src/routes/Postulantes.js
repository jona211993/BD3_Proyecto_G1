// EN RUTAS  ES  DONDE IRA TODO EL TRABAJO DEL SERVIDOR
// DONDE SE ESTARA ESCUCHANDO LO QUE PIDA EL NAVEGADOR

const express = require('express');
const router = express.Router();

// aqui voy a requerir mi modelo creado , en este caso fue el modelo Empleado
const POSTULANTES = require('../models/m_postulante');

// Definimos las rutas::

// Aquí realizaremos la opereacion de Consulta : El famoso GET:
router.get('/', async (req, res) => {
    const p = await POSTULANTES.find();
    res.json(p);

});

// Aquí realizaremos la opereacion de escribir los datos : El famoso POST:
router.post('/', async (req, res) => {
    try {
        const { user_id, user, password, dni, name, lastname, edad, email,
            celular, direccion, formacion, centro_e, Carrera } = req.body;
        let response = await POSTULANTES.create({
            user_id, user, password, dni, name, lastname, edad, email,
            celular, direccion, formacion, centro_e, Carrera
        });

        console.log(response)
        return res.json({
            status: 200,
            user_id,
            name,
            message: "Se ha creado el nuevo postulante"
        });

    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: "Ha aparecido un ERROR"
        });
    }
});

// Ahora realizaremos el update::
router.put("/:user_id", async (req, res) => {
    try {
        const {
            user,
            password,
            dni,
            name,
            lastname,
            edad,
            email,
            celular,
            direccion,
            formacion,
            centro_e,
            Carrera,
        } = req.body;

        const { user_id } = req.params;

        const Postulante = await POSTULANTES.findOneAndUpdate(
            { user_id },
            {
                user,
                password,
                dni,
                name,
                lastname,
                edad,
                email,
                celular,
                direccion,
                formacion,
                centro_e,
                Carrera,
            }
        );
        if (!Postulante) {
            return res.json({
                status: 404,
                message: "No se encontró al postulante",
            });
        }

        const updated_postulante = await POSTULANTES.findOne({ user_id });

        return res.json({
            status: 200,
            message: "Se ha actualizado el postulante",
            data: updated_postulante,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            status: 500,
            message: "Ha aparecido un ERROR",
            postulante: updated_postulante,
        });
    }
});


// Delete

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const response = await POSTULANTES.findByIdAndDelete(id);
        return res.json({
            status: 200,
            message: "Se ha eliminado al postulante"
        })

    } catch (error) {
        console.log(error);
        return res.json({
            status: 500,
            message: "Hubo un error"
        })
    }



});




module.exports = router;