CREATE PROCEDURE SP_GETSUCURSALES (@codigoEntidadFederal VARCHAR(10), @localidad  VARCHAR (100))
AS
BEGIN

  IF (@codigoEntidadFederal IS NULL) OR (TRIM(@codigoEntidadFederal) = '')
  BEGIN

    IF (@localidad IS NULL) OR (TRIM(@localidad) = '')
    BEGIN
        SELECT suc.idSucursal AS idSucursal
              ,suc.nombre AS nombreSucursal
              ,suc.cuit AS cuit
              ,suc.telefono AS telefono
              ,suc.email AS email
              ,suc.direccion AS direccion
              ,suc.lat AS latitud
              ,suc.lng AS longitud
              ,prov.nombre AS provincia
              ,prov.codigoEntidadFederal AS codigoEntidadFederal
              ,loc.nombre AS localidad
        FROM sucursal suc
        JOIN localidad loc
            ON  suc.idLocalidad = loc.idLocalidad
            AND suc.idProvincia = loc.idProvincia
        JOIN provincia prov
            ON  prov.idProvincia = suc.idProvincia
        RETURN
    END


  END

  IF (@localidad IS NULL) OR (TRIM(@localidad) = '')
  BEGIN
    SELECT suc.idSucursal AS idSucursal
          ,suc.nombre AS nombreSucursal
          ,suc.cuit AS cuit
          ,suc.telefono AS telefono
          ,suc.email AS email
          ,suc.direccion AS direccion
          ,suc.lat AS latitud
          ,suc.lng AS longitud
          ,prov.nombre AS provincia
          ,prov.codigoEntidadFederal AS codigoEntidadFederal
          ,loc.nombre AS localidad
    FROM sucursal suc
    JOIN localidad loc
        ON  suc.idLocalidad = loc.idLocalidad
        AND suc.idProvincia = loc.idProvincia
    JOIN provincia prov
        ON  prov.idProvincia = suc.idProvincia
    WHERE prov.codigoEntidadFederal = @codigoEntidadFederal
    RETURN
  END

  SELECT suc.idSucursal AS idSucursal
        ,suc.nombre AS nombreSucursal
        ,suc.cuit AS cuit
        ,suc.telefono AS telefono
        ,suc.email AS email
        ,suc.direccion AS direccion
        ,suc.lat AS latitud
        ,suc.lng AS longitud
        ,prov.nombre AS provincia
        ,prov.codigoEntidadFederal AS codigoEntidadFederal
        ,loc.nombre AS localidad
    FROM sucursal suc
    JOIN localidad loc
        ON  suc.idLocalidad = loc.idLocalidad
        AND suc.idProvincia = loc.idProvincia
    JOIN provincia prov
        ON  prov.idProvincia = suc.idProvincia
    WHERE prov.codigoEntidadFederal = @codigoEntidadFederal
    AND loc.nombre = @localidad
END
GO
