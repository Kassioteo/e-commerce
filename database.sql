-- DROP DATABASE IF EXISTS ecommerce;
-- CREATE DATABASE IF NOT EXISTS ecommerce;
USE ecommerce;

CREATE TABLE
    endereco (
        id_endereco INT NOT NULL AUTO_INCREMENT,
        pais VARCHAR(45) NOT NULL,
        estado VARCHAR(10) NOT NULL,
        cidade VARCHAR(45) NOT NULL,
        rua VARCHAR(75) NOT NULL,
        numero VARCHAR(25) NOT NULL,
        observacao VARCHAR(120),
        CONSTRAINT PRIMARY KEY (id_endereco)
    );

CREATE TABLE
    clientes (
        id_cliente INT NOT NULL AUTO_INCREMENT,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        senha VARCHAR(25) NOT NULL,
        id_endereco INT,
        telefone_celular VARCHAR(25),
        CONSTRAINT PRIMARY KEY (id_cliente),
        FOREIGN KEY (id_endereco) REFERENCES endereco (id_endereco)
    );

CREATE TABLE
    produtos (
        id_produto INT NOT NULL AUTO_INCREMENT,
        nome VARCHAR(150) NOT NULL,
        valor INT NOT NULL,
        categoria VARCHAR(80) NOT NULL,
        descricao VARCHAR(250) NOT NULL,
        estoque INT NOT NULL,
        CONSTRAINT PRIMARY KEY (id_produto)
    );

CREATE TABLE
    carrinhos (
        id_carrinho INT NOT NULL AUTO_INCREMENT,
        id_cliente INT NOT NULL,
        valor DECIMAL(4, 2) NOT NULL,
        status VARCHAR(45) NOT NULL,
        CONSTRAINT PRIMARY KEY (id_carrinho),
        FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente)
    );

CREATE TABLE
    produtos_carrinhos (
        id_carrinho INT NOT NULL,
        id_produto INT NOT NULL,
        quantidade INT NOT NULL,
        CONSTRAINT PRIMARY KEY (id_carrinho, id_produto),
        FOREIGN KEY (id_carrinho) REFERENCES carrinhos (id_carrinho),
        FOREIGN KEY (id_produto) REFERENCES produtos (id_produto)
    );

CREATE TABLE
    avaliacoes (
        id_cliente INT NOT NULL,
        id_produto INT NOT NULL,
        avaliacao VARCHAR(200),
        pontuacao INT,
        CONSTRAINT PRIMARY KEY (id_cliente, id_produto),
        FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente),
        FOREIGN KEY (id_produto) REFERENCES produtos (id_produto)
    );

INSERT INTO
    clientes (nome, email, senha)
VALUES
    ("kassio", "kassio@gmail.com", "ka123"),
    ("polly", "polly@gmail.com", "po123"),
    ("stevann", "stevann@gmail.com", "st123"),
    ("teodoro", "teodoro@gmail.com", "te123"),
    ("vladimir", "vladimir@gmail.com", "vl123");