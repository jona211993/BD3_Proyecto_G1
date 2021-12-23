// EN RUTAS  ES  DONDE IRA TODO EL TRABAJO DEL SERVIDOR
// DONDE SE ESTARA ESCUCHANDO LO QUE PIDA EL NAVEGADOR

const express = require("express");
const router = express.Router();

// aqui voy a requerir mi modelo creado , en
// este caso fue el modelo Empresa
const ADMINISTRADORES = require("../models/m_administradores");

// Definimos las rutas::
router.get("/", async (req, res) => {
  const A = await ADMINISTRADORES.find();
  res.json(A);
});

// Aquí realizaremos la opereacion de escribir los datos : El famoso POST:
router.post("/", async (req, res) => {
  try {
    const Administrador = await ADMINISTRADORES.findOne({
      usuario: req.body.usuario,
      contrasenia: req.body.password
    });

    if (Administrador)
      return res.json({
        status: 200,
        message: "Inicio de Sesion correcto",
        data: Administrador,
      });
      else{
        return res.json({
                status: 300,
                message: "Usuario o Contraseña invalido",
              });

      }

  } catch (error) {
        return res.json({
                status: 500,
                message: "Hubo un error",
              });
  }
});

module.exports = router;
