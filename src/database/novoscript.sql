CREATE TABLE Empresas (
IDempresa INT PRIMARY KEY auto_increment,
nomeEmpresa VARCHAR(60),
CNPJ VARCHAR(14)
);

CREATE TABLE salas (
  IDsala INT NOT NULL AUTO_INCREMENT,
  andar VARCHAR(45),
  sala VARCHAR(45),
  FK_empresa INT NOT NULL,
  PRIMARY KEY (IDsala),
FOREIGN KEY (FK_empresa)REFERENCES Empresas (IDempresa)
);

CREATE TABLE cargos (
  IDcargo INT NOT NULL AUTO_INCREMENT,
  nivel VARCHAR(45) NULL,
  PRIMARY KEY (IDcargo)
  );
  
CREATE TABLE funcionarios (
IDfuncionario INT NOT NULL AUTO_INCREMENT,
nomeFuncionario VARCHAR (45),
CPF CHAR (11),
dataNascimento DATE,
email VARCHAR (45),
senha VARCHAR (16),
FK_empresa INT,
FOREIGN KEY (FK_empresa)REFERENCES Empresas (IDempresa),
FK_cargo INT,
FOREIGN KEY (FK_cargo)REFERENCES cargos (IDcargo),
PRIMARY KEY (IDfuncionario, FK_empresa, FK_cargo)
);

CREATE TABLE arduino (
IDarduino INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
modelo VARCHAR (30),
codigo CHAR (10),
FK_sala INT,
FOREIGN KEY (FK_sala) REFERENCES salas (IDsala)
);

CREATE TABLE historico (
IDarduino INT auto_increment,
fk_sensor INT,
data_hora datetime DEFAULT CURRENT_TIMESTAMP,
dht11_umidade DECIMAL (10,2),
dht11_temperatura DECIMAL (10,2),
luminosidade DECIMAL (10,2),
lm35_temperatura DECIMAL (10,2),
chave INT,
FOREIGN KEY (fk_sensor) REFERENCES arduino(idarduino),
PRIMARY KEY (IDarduino, fk_sensor)
);