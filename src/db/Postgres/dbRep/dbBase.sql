
--Postgres code

create table Estacionamento(
    IdEstacionamento BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY,
    Endereco VARCHAR(255) NOT NULL,
    Nome VARCHAR(100) NOT NULL,
    PRIMARY KEY (IdEstacionamento)
);

create table Pessoa(
    IdPessoa BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY,
    Nome VARCHAR(100) NOT NULL,
    DataNasc date NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Telefone VARCHAR(100) NOT NULL,
    PRIMARY KEY (IdPessoa)
);

create table Funcionario(
    IdFuncionario BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY,
    IdEstacionamento BIGINT NOT NULL,
    IdPessoa BIGINT NULL,
    Senha VARCHAR(150) NOT NULL,
    UNIQUE(IdFuncionario),
    FOREIGN KEY (IdEstacionamento) REFERENCES Estacionamento(IdEstacionamento),
    FOREIGN KEY (IdPessoa) REFERENCES Pessoa(IdPessoa),
    PRIMARY KEY (IdFuncionario)
);

create table Cliente(
    IdCliente BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY,
    IdFuncionario BIGINT NOT NULL, --Quem cadastrou
    IdPessoa BIGINT NULL,
    FOREIGN KEY (IdFuncionario) REFERENCES Funcionario(IdFuncionario),
    FOREIGN KEY (IdPessoa) REFERENCES Pessoa(IdPessoa),
    PRIMARY KEY (IdCliente)
);

create table Carro(
    IdCarro BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY,
    IdCliente BIGINT NULL,
    Placa VARCHAR(6) NOT NULL,
    Modelo VARCHAR(50) NULL,
    Marca VARCHAR(40) NULL,
    Cor VARCHAR(20) NULL,
    FOREIGN KEY (IdCliente) REFERENCES Cliente(IdCliente),
    PRIMARY KEY (IdCarro)
);

create table AcessoEstacionamento(
    IdAcessoEstacionamento BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY,
    IdEstacionamento BIGINT NOT NULL,
    IdCarro BIGINT NOT NULL,
    IdFuncionario BIGINT NOT NULL,
    DataAcesso date NOT NULL,
    ValorCobranca DECIMAL(18,8) NOT NULL,
    PagamentoComPromocao BIT NOT NULL,
    Pago BIT NOT NULL,
    FOREIGN KEY (IdEstacionamento) REFERENCES Estacionamento(IdEstacionamento),
    FOREIGN KEY (IdFuncionario) REFERENCES Funcionario(IdFuncionario),
    FOREIGN KEY (IdCarro) REFERENCES Carro(IdCarro),
    PRIMARY KEY (IdAcessoEstacionamento)
);

-- Lib no docker
-- docker run --name postgresest -e POSTGRES_USER=local -e POSTGRES_PASSWORD=123456 -e POSTGRES_DB=estacionamento -p 5432:5432 -d postgres