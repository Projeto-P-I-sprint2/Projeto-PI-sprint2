create database COMPROD;
use COMPROD;

create table Empresas (idempresa int primary key auto_increment,
nomeEmpresa varchar(60),
CNPJ varchar(14),
email varchar(45),
senha varchar(16));


insert into Empresas (nomeEmpresa,CNPJ, email, senha)
value ("itau", "01012012000101", 'empresabanco@outlook.com', 'digito');


create table Enderecos (idenderecos int primary key auto_increment,
CEP varchar(20),
rua varchar(45),
complemento varchar(10),
bairro varchar(60),
cidade varchar(35),
fk_empresa int,
foreign key (fk_empresa) references Empresas (idempresa));

insert into Enderecos (CEP, rua, complemento, bairro, cidade, fk_empresa)
value ("69399-999","jardins", "51", "paulista", 'sp', '01');


create table arduino (
idarduino int primary key auto_increment,
codigoarduino varchar(50),
modelo varchar(60),
setor_instalado varchar(45),
fk_empresas int,
foreign key (fk_empresas) references Empresas (idempresa)
);

insert into arduino ( codigoarduino, modelo , setor_instalado, fk_empresas)
value ("codigoum", 'split', 'area_rural', 01);


create table historico (idsensor int primary key auto_increment,
data_hora datetime,
luminosidade_atual varchar(50),
temperatura_atual varchar(35),
temperatura_maxima varchar(40),
temperatura_minima varchar(80),
fk_sensor int,
foreign key (fk_sensor) references arduino(idarduino));


insert into historico (data_hora, luminosidade_atual, temperatura_atual, temperatura_maxima, temperatura_minima,fk_sensor)
value ("2022-01-15 10:10:01", "80", "20", "30", "15", 01);

describe Historico;
create table Funcionarios (idfuncionario int primary key auto_increment,
nomeFuncionario varchar(50),
CPF varchar(90),
cargo varchar(100),
dataNascimento varchar(120),
email varchar(90),
senha varchar(16),
fk_terceirafkempresa int,
foreign key (fk_terceirafkempresa) references Empresas ( idempresa));

alter table Funcionarios add column fk_chefe int;
alter table Funcionarios add foreign key (fk_chefe) references Funcionarios (idFuncionario);
select * from Funcionarios;

insert into Funcionarios (nomeFuncionario, CPF, cargo, dataNascimento, email, senha, fk_terceirafkempresa)
value ("luis", "987654-000", "ajudante", "dezembro", "luis01@gmail.com", "senhaum", 01);


update Funcionarios set fk_chefe = null where idfuncionario = 01;
update Funcionarios set fk_chefe = '01' where idfuncionario = 02;
update Funcionarios set fk_chefe = '02' where idfuncionario = 03;
