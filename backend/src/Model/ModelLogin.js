const connection = require('./connection')

const register = (body) =>
    connection.execute(
        `INSERT INTO login (nome, email, senha) VALUES
            (?,?,?);`,
            [body.nome,body.email,body.senha]
)

const update = (email, body) =>
    connection.execute(
        `UPDATE login
         SET nome = ?, email = ?, senha = ?
         WHERE email = ?;`,
            [body.nome,body.email,body.senha, email]
)


module.exports = {
    register,
    update
}