USE database;

CREATE TABLE endereco (
    id_endereco INT,
    pais VARCHAR(45) NOT NULL,
    estado VARCHAR(10) NOT NULL,
    cidade VARCHAR(45) NOT NULL,
    rua VARCHAR(75) NOT NULL,
    numero VARCHAR(25) NOT NULL,
    observacao VARCHAR(120) NOT NULL,
        CONSTRAINT PRIMARY KEY(id_endereco)
);

CREATE TABLE clientes (
    id_cliente INT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(25) NOT NULL,
    id_endereco INT,
    telefone_celular VARCHAR(25),
        CONSTRAINT PRIMARY KEY(id_cliente),
            FOREIGN KEY (id_endereco) REFERENCES endereco (id_endereco)
);

CREATE TABLE produtos (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    valor INT NOT NULL,
    categoria VARCHAR(80) NOT NULL,
    descricao VARCHAR(250) NOT NULL,
    estoque INT NOT NULL,
)


-- CREATE TABLE compras_efetuadas ()

INSERT INTO cliente ( nome, email, senha) VALUES
    ("kassio","kassio@gmail.com","ka123"),
    ("polly","polly@gmail.com","po123"),
    ("stevann","stevann@gmail.com","st123"),
    ("teodoro","teodoro@gmail.com","te123"),
    ("vladimir","vladimir@gmail.com","vl123");

-- CREATE TABLE estoque () 

-- CREATE TABLE avaliacoes ()

-- CREATE TABLE recomendacoes () 

-- INSERT INTO products (nome, valor, categoria, descricao, estoque) VALUES
--     ("celular")
