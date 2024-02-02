const express = require("express");

const { ControllerLogin } = require("../Controller");

const router = express.Router();

// registrar
router.post("/", ControllerLogin.register)

// atualizar
router.put("/:email", ControllerLogin.update)

// // logar
// router.get("/", ControllerLogin.logar)

// // deletar
// router.delete("/:email", ControllerLogin.deletar)

module.exports = router;
