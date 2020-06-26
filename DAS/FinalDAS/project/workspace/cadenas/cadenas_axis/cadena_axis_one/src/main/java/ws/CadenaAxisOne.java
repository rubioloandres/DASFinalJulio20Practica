package ws;

import service.CadenaAPI;
public class CadenaAxisOne {

    public String health() {

        return "OK";
    }

    public String sucursales (final String codigoentidadfederal
            ,final String localidad)
            throws Exception {

        return CadenaAPI.sucursales(codigoentidadfederal, localidad);
    }

    public String preciosSucursales (final String codigoentidadfederal
            ,final String localidad
            ,final String codigos)
            throws Exception {

        return CadenaAPI.preciosSucursales(codigoentidadfederal,localidad,codigos);

    }

    public void simularPrecios (final String codigoentidadfederal
            ,final String localidad)
            throws Exception {

        CadenaAPI.simularPrecios(codigoentidadfederal,localidad);
        return;
    }

    public String insertarMensaje ( final String nombre
                                , final String apellido
                                , final String mensaje
                                , final String email) throws Exception {

        System.out.println("chega");
        return CadenaAPI.insertarMensaje(nombre,apellido,mensaje,email);
    }
}
