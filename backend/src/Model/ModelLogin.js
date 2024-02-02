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

const del = (email) =>
    connection.execute(
        `DELETE FROM login
         WHERE email = ?;`,
            [email]
)

const getEmail = (email) =>
    connection.execute(
        `SELECT * FROM login
         WHERE email = ?;`,
            [email]
)

const getSenha = (senha) =>
    connection.execute(
        `SELECT * FROM login
         WHERE senha = ?;`,
            [senha]
)



module.exports = {
    register,
    update,
    del,
    getEmail,
    getSenha
}