CREATE DATABASE COLDTIME;

USE COLDTIME;

CREATE TABLE clientes (
	idEmpresa int primary key auto_increment,
    nomedaEmpresa varchar (40),
    CNPJ varchar (18),
    representante varchar (40),
    email varchar (40),
    senha varchar (25)
);

CREATE TABLE enderecosEmpresa (
	idEndereco int primary key auto_increment,
    endereco varchar (40),
    bairro varchar (30),
    complemento varchar (20),
    estado varchar (40),
    cidade varchar (40),
    idEmpresa int
);

CREATE TABLE sensor (
	idSensor int primary key auto_increment,
    nomeSensor varchar (20),
    tipo ENUM ('Temperatura','Luminosidade'),
    localidade varchar (50),
    idEndereco int
);

CREATE TABLE registroSensor (
	idRegistro int primary key auto_increment,
    idSensor int,
    dataHora datetime,
    valorRegistro varchar (30)
);

CREATE TABLE produtividade (
	idProdutividade int primary key auto_increment,
    mes Varchar (30),
    resltAbsenteismo varchar (30),
    idEndereco int
);

CREATE TABLE telefonesEmpresas (
	idTelefone int primary key auto_increment,
    idEndereco int,
    telefone Varchar (30)
);
