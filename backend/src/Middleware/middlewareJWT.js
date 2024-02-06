const { newToken, decode } = require("../utils/JWT");

const genereteToken = ({ body: {data} }, res) => {
  const token = newToken(data);
  res.status(200).json({ token, nome: data.nome, email: data.email });
};

const decodeToken = ({ body, headers }, res, next) => {
    try{
        const tokenData = decode(JSON.parse(headers.authorization));
        body.data = tokenData;
        next();
    } catch(err) {
        res.status(400).json({messageError: `Middleware.JWT: ${err.message}`})
    }
};

module.exports = {
  genereteToken,
  decodeToken,
};
