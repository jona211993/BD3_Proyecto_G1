// EN RUTAS  ES  DONDE IRA TODO EL TRABAJO DEL SERVIDOR
// DONDE SE ESTARA ESCUCHANDO LO QUE PIDA EL NAVEGADOR

const express = require("express");
const router = express.Router();

// aqui voy a requerir mi modelo creado , en este caso fue el modelo Empleado
const POSTULANTES = require("../models/m_postulante");

// Definimos las rutas::

// Aquí realizaremos la opereacion de Consulta : El famoso GET:
router.get("/", async (request, response) => {
  try {
    const { edad, formacion } = request.query; //* Consulta que viene del cliente
    let queryServidor = {}; //* Consulta pero del servidor, consulta que el servidor va a realizar

    if (edad) queryServidor.edad = edad;
    /*
     * queryServidor = {
     *  edad: edad
     * }
     */

    /*
     * queryServidor = {}
     */

    if (formacion) queryServidor.formacion = formacion;
    /*
     * queryServidor = {
     *  formacion: formacion
     *  edad: edad
     * }
     */

    /*
     * queryServidor = {}
     */

    const responsePostulantes = await POSTULANTES.find(queryServidor).select([
      "-password",
    ]);
    return response.json({
      status: 200,
      data: responsePostulantes,
      message: "Se ha obtenido los usuarios con éxito",
    });
  } catch (e) {
    return res.json({
      status: 500,
      message:
        "Se ha generado un error al momento hacer la peticion de los Postulantes",
    });
  }
});

//* Busqueda unica de Postulante mediante un identificador Unico
router.get("/:unique", async (req, res) => {
  try {
    const { unique } = req.params;
    const responsePostulante = await POSTULANTES.findOne({ _id: unique  }).select(['-password'])

    return res.json({
      status: 200,
      data: responsePostulante,
      message: "Se ha obtenido con éxito el Postulante",
    });
  } catch (e) {
    console.log(e);
    return res.json({
      status: 500,
      message:
        "Se ha generado un error al momento hacer la peticion de un Postulante",
    });
  }
});

// Aquí realizaremos la opereacion de escribir los datos : El famoso POST:
router.post("/", async (req, res) => {
  try {
    const {
      name,
      lastname,
      dni,
      password,
      edad,
      email,
      celular,
      direccion,
      formacion,
      centro_e,
      carrera,
    } = req.body;
    let response = await POSTULANTES.create({
      name,
      lastname,
      dni,
      password,
      edad,
      email,
      celular,
      direccion,
      formacion,
      centro_e,
      carrera,
    });
    return res.json({
      status: 201,
      name,
      message: "Se ha creado el nuevo postulante",
    });
  } catch (error) {
    return res.json({
      status: 500,
      message: "Se ha generado un error al momento de crear un Postulante",
    });
  }
});

// Ahora realizaremos el update::
router.put("/:_id", async (req, res) => {
  try {
    const {
      name,
      lastname,
      dni,
      edad,
      email,
      password,
      celular,
      direccion,
      formacion,
      centro_e,
      carrera,
    } = req.body;

    const { _id } = req.params;

    const Postulante = await POSTULANTES.findOneAndUpdate(
      { _id },
      {
        name,
        lastname,
        dni,
        edad,
        email,
        password,
        celular,
        direccion,
        formacion,
        centro_e,
        carrera,
      }
    );
    if (!Postulante) {
      return res.json({
        status: 404,
        message: "No se encontró al postulante que se quiere editar",
      });
    }

    const updated_postulante = await POSTULANTES.findOne({ _id });

    return res.json({
      status: 200,
      message: "Se ha actualizado el postulante",
      data: updated_postulante,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: 500,
      message: "Ha aparecido un ERROR al momento de actualizar a un postulante",
      postulante: updated_postulante,
    });
  }
});

// Delete

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const response = await POSTULANTES.findByIdAndDelete(_id);
    return res.json({
      status: 200,
      message: "Se ha eliminado al postulante",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: 500,
      message: "Hubo un error al momento de elimianr un postulante",
    });
  }
});

module.exports = router;
