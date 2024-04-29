const connection = require("./connection");

const create = (body) =>
  connection.execute(
    `INSERT INTO clientes (nome, email, senha) VALUES
            (?,?,?);`,
    [body.nome, body.email, body.senha]
  );

const getEmail = (email) =>
  connection.execute(
    `SELECT id_cliente, nome, email, senha FROM clientes
         WHERE email = ?;`,
    [email]
  );

const getId = (id) =>
  connection.execute(
    `SELECT id_cliente, nome, email, senha FROM clientes
         WHERE id_cliente = ?;`,
    [id]
  );

const update = (id, body) =>
  connection.execute(
    `UPDATE clientes
         SET nome = ?, email = ?, senha = ?
         WHERE id_cliente = ?;`,
    [body.nome, body.email, body.senha, id]
  );

const del = (id) =>
  connection.execute(
    `DELETE FROM clientes
         WHERE id_cliente = ?;`,
    [id]
  );

module.exports = {
  create,
  update,
  del,
  getEmail,
  getId,
};
