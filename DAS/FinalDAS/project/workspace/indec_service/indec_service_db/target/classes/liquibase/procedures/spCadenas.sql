CREATE PROCEDURE spCadenas AS
BEGIN
 SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED
 SELECT  idCadena, nombreCadena, imagenCadena
    FROM  cadena
END
