package sdk.clients;

import sdk.clients.exceptions.ClientException;
import sdk.clients.genericClients.SoapClient;
import sdk.contract.CadenaServiceContract;
import sdk.ds.Sucursal;
import sdk.utils.GSON;
import java.util.Arrays;
import java.util.List;

import static sdk.clients.constants.Constants.*;


public class CadenaSoapClient extends SoapClient implements CadenaServiceContract {

    public CadenaSoapClient(final String wsdlUrl){
        super(wsdlUrl);
     }

     public String health()throws ClientException
    {
        final Object object = executeMethod(HEALTH);
        final String jsonBean = object.toString();
        return jsonBean;
    }

    public String mensajeria(final String nombre, final String apellido, final String mensaje, final String email) throws ClientException
    {

        System.out.println("por qui tudo beim");
        final Object object = executeMethod(INSERTAR_MENSAJE, nombre, apellido, mensaje, email);

        final String estadoMensaje = object.toString();
        return estadoMensaje;
    }


    public List<Sucursal> sucursales
            (final String codigoentidadfederal
            ,final String localidad)throws ClientException
    {
        //Ejecutamos el metodo en el servicio con el cual mantenemos conexion
        final Object object = executeMethod(SUCURSALES,codigoentidadfederal,localidad);

        //Obtenemos el json de respuesta
        final String sucursalesJson = object.toString();

        Sucursal[] sucs = GSON.toObject(sucursalesJson, Sucursal[].class);

        List<Sucursal> sucursales = Arrays.asList(sucs);


        return sucursales;

    }


    public List<Sucursal>  preciosSucursales
            (final String codigoentidadfederal
            ,final String localidad
            ,final String codigos)throws ClientException
    {

        //Ejecutamos el metodo en el servicio con el cual mantenemos conexion
        final Object object = executeMethod(PRECIOSSUCURSALES,codigoentidadfederal,localidad,codigos);

        //Obtenemos el json de respuesta
        final String sucursalesJson = object.toString();

        Sucursal[] sucs = GSON.toObject(sucursalesJson, Sucursal[].class);

        List<Sucursal> sucursales = Arrays.asList(sucs);


        return sucursales;

    }
}