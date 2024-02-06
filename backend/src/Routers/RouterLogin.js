const express = require("express");

const { ControllerLogin } = require("../Controller");
const { MiddlewareLogin, MiddlewareJWT } = require("../Middleware");

const router = express.Router();

// registrar
router.post("/register", MiddlewareLogin.validData, ControllerLogin.register, MiddlewareJWT.genereteToken)

// atualizar
router.put("/",MiddlewareJWT.decodeToken, MiddlewareLogin.validData, ControllerLogin.update)

// logar
router.post("/", MiddlewareLogin.validLog, ControllerLogin.login, MiddlewareJWT.genereteToken)

// deletar
router.delete("/",MiddlewareJWT.decodeToken, ControllerLogin.del)

module.exports = router;
