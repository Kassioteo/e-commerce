const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET || 'seusecretdetoken';
const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const newToken = (data) => jwt.sign(data, secret, jwtConfig);

    const decode = (token) => jwt.verify(token, secret);

    module.exports = {
        newToken,
        decode
    }