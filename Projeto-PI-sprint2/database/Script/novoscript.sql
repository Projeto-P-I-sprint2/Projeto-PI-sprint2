create database COMPROD;
use COMPROD;

create table Empresas (idempresa int primary key auto_increment,
nomeEmpresa varchar(60),
CNPJ varchar(13),
email varchar(45),
senha varchar(16));

insert into Empresas (nomeEmpresa,CNPJ, email, senha)
value ("itau", " 01.012.012/0001-01", 'empresabanco@outlook.com', 'digito'),
("santander","10.321.222/1111-02", "santander@outlook.com", "minhasenha"),
("bradesco", "01.012.012/0001-01", "banco@hotmail.com", "senhaum");

create table Endereços (idenderecos int primary key auto_increment,
CEP varchar(20),
rua varchar(45),
complemento varchar(10),
bairro varchar(60),
cidade varchar(35),
fk_empresa int,
foreign key (fk_empresa) references Empresas (idempresa));

insert into Endereços (CEP, rua, complemento, bairro, cidade, fk_empresa)
value ("69399-999","jardins", "51", "paulista", 'sp', '01'),
("654321-111","consolacao", "89", "vergueiro", 'rj', '02'),
("123456-666", "palmeiras", "90", "prudente", "es", "02"),
("020202-025", "barra", "100", "santa","rs", "03");

select * from Empresas;
select * from Endereços; 

create table arduino (idarduino int primary key auto_increment,
codigoarduino varchar(50),
modelo varchar(60),
setor_instalado varchar(45),
fk_empresas int,
foreign key (fk_empresas) references Empresas ( idempresa));

insert into arduino ( codigoarduino, modelo , setor_instalado, fk_empresas)
value ("codigoum", 'split', 'area_rural', '01'),
("codigodois", 'ranger', 'cidade',"02"),
("codigotres", 'kiwi', "metropole", "02"),
("codigoquatro","comprod", '', '03');

create table historico (idsensor int primary key auto_increment,
data_hora datetime,
luminosidade_atual varchar(50),
temperatura_atual varchar(35),
temperatura_maxima varchar(40),
temperatura_minima varchar(80),
fk_sensor int,
foreign key (fk_sensor) references arduino( idarduino));

insert into historico (data_hora, luminosidade_atual, temperatura_atual, temperatura_maxima, temperatura_minima,fk_sensor)
value ("2022-01-15 10:10:01", "80", "20", "30", "15", "01"),
("2022-01-20 20:10:01", "89", "21", "32", "16", "02"),
("2021-02-25 23:50:10", "90", "22", "33", "17", "03"),
("2020-06-28 01:59:45", "91", "23", "33", "18", "04");

select * from arduino;

select * from historico;

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
value ("luis", "987654-000", "ajudante", "dezembro", "luis01@gmail.com", "senhaum", "01"), 
 ("felipe", "456123-321", "mestre", "novembro", "felipe.eandrade@outlook.com", "senhadois", "02"),
("paulo", "852963-741", "gestor", "janeiro", "paulo1232@hotmail.com", "senhatres","03" ),
("luis", "787921-654", "ajudante", "fevereiro", "luiswork@outlook.com", "senhaquatro","03");

update Funcionarios set fk_chefe = null where idfuncionario = 01;
update Funcionarios set fk_chefe = '01' where idfuncionario = 02;
update Funcionarios set fk_chefe = '02' where idfuncionario = 03;
