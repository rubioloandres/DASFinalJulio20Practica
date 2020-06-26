CREATE TABLE mensaje (
     idMensaje SMALLINT NOT NULL IDENTITY
    ,idSucursal SMALLINT NOT NULL
    ,nombre VARCHAR(50) NOT NULL
    ,apellido VARCHAR(50) NOT NULL
    ,mensaje VARCHAR(500) NOT NULL
    ,email VARCHAR (100) NOT NULL
    , PRIMARY KEY (idMensaje)
)