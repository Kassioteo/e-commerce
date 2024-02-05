const express = require("express");

const { ControllerLogin } = require("../Controller");
const { MiddlewareLogin } = require("../Middleware");

const router = express.Router();

// registrar
router.post("/register", MiddlewareLogin.validData, ControllerLogin.register)

// atualizar
router.put("/:email", MiddlewareLogin.validData, ControllerLogin.update)

// logar
router.post("/", MiddlewareLogin.validData, ControllerLogin.login)

// deletar
router.delete("/:email", ControllerLogin.del)

module.exports = router;
