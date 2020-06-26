CREATE PROCEDURE SP_INSERTMENSAJE (@idSucursal SMALLINT, @nombre VARCHAR(50), @apellido VARCHAR(50), @mensaje VARCHAR(500), @email VARCHAR(100))
    AS
    SET NOCOUNT ON
    BEGIN

        IF (@idSucursal IS NULL)
            BEGIN
                RAISERROR('El parametro @idSucursal es null', 15, 1)
            END

        IF (@nombre IS NULL)
            BEGIN
                RAISERROR('El parametro @nombre es null', 15, 1)
            END

        IF (@apellido IS NULL)
            BEGIN
                RAISERROR('El parametro @apellido es null', 15, 1)
            END

        IF (@mensaje IS NULL)
            BEGIN
                RAISERROR('El parametro @mensaje es null', 15, 1)
            END

        IF (@email IS NULL)
            BEGIN
                RAISERROR('El parametro @email es null', 15, 1)
            END

         INSERT INTO mensaje(idSucursal,nombre, apellido, mensaje, email) VALUES (@idSucursal,@nombre,@apellido,@mensaje,@email)


    END
GO