const { UtilsLogin } = require("../utils");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validBody = (body) => {
  const bodyKey = ["nome", "email", "senha"];
  if (bodyKey.every((key) => key in body)) {
    return false;
  }
  return true;
};

const validBodyLog = (body) => {
  const bodyKey = ["email", "senha"];
  if (bodyKey.every((key) => key in body)) {
    return false;
  }
  return true;
};

const validEmail = (email) => {
  if (regexEmail.test(email)) {
    return false;
  }
  return true;
};

const validData = ({ body }, res, next) => {
  if (validBody(body)) {
    return res.status(400).json({ message: "data ivalid" });
  }
  if (validEmail(body.email)) {
    return res.status(400).json({ message: "email ivalid" });
  }
  return next()
};

const validLog = ({ body }, res, next) => {
  if (validBodyLog(body)) {
    return res.status(400).json({ message: "data ivalid" });
  }
  if (validEmail(body.email)) {
    return res.status(400).json({ message: "email ivalid" });
  }
  return next()
};

const ExistEmail = (email) => {
    UtilsLogin.validEmail
}

module.exports = {
    validData,
    validLog
}