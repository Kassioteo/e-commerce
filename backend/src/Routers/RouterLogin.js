const express = require("express");

const { ControllerLogin } = require("../Controller");
const { MiddlewareLogin } = require("../Middleware");

const router = express.Router();

// registrar
router.post("/", MiddlewareLogin.validData, ControllerLogin.register)

// atualizar
router.put("/:email", MiddlewareLogin.validData, ControllerLogin.update)

// logar
router.get("/", MiddlewareLogin.validData, ControllerLogin.login)

// deletar
router.delete("/:email", ControllerLogin.del)

module.exports = router;
