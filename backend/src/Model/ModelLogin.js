const connection = require('./connection')

const register = (body) =>
    connection.execute(
        `INSERT INTO login (nome, email, senha) VALUES
            (?,?,?);`,
            [body.nome,body.email,body.senha]
)

const update = (id, body) =>
    connection.execute(
        `UPDATE login
         SET nome = ?, email = ?, senha = ?
         WHERE id = ?;`,
            [body.nome,body.email,body.senha, id]
)

const del = (id) =>
    connection.execute(
        `DELETE FROM login
         WHERE id = ?;`,
            [id]
)

const getEmail = (email) =>
    connection.execute(
        `SELECT id, nome, email FROM login
         WHERE email = ?;`,
            [email]
)

const getSenha = (senha) =>
    connection.execute(
        `SELECT * FROM login
         WHERE senha = ?;`,
            [senha]
)

const getId = (id) =>
    connection.execute(
        `SELECT * FROM login
         WHERE id = ?;`,
            [id]
)


module.exports = {
    register,
    update,
    del,
    getEmail,
    getSenha,
    getId
}