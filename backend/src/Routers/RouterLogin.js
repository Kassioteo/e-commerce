const express = require("express");

const { ControllerLogin } = require("../Controller");

const router = express.Router();

// registrar
router.post("/", ControllerLogin.register)

// atualizar
router.put("/:email", ControllerLogin.update)

// logar
router.get("/", ControllerLogin.login)

// deletar
router.delete("/:email", ControllerLogin.del)

module.exports = router;
