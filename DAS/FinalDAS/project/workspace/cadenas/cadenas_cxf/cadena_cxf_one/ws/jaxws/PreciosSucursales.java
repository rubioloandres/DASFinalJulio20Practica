
package ws.jaxws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * This class was generated by Apache CXF 3.2.2
 * Tue Jun 23 09:13:33 ART 2020
 * Generated source version: 3.2.2
 */

@XmlRootElement(name = "preciosSucursales", namespace = "http://ws.das.edu.ubp.ar/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "preciosSucursales", namespace = "http://ws.das.edu.ubp.ar/", propOrder = {"codigoentidadfederal", "localidad", "codigos"})

public class PreciosSucursales {

    @XmlElement(name = "codigoentidadfederal")
    private java.lang.String codigoentidadfederal;
    @XmlElement(name = "localidad")
    private java.lang.String localidad;
    @XmlElement(name = "codigos")
    private java.lang.String codigos;

    public java.lang.String getCodigoentidadfederal() {
        return this.codigoentidadfederal;
    }

    public void setCodigoentidadfederal(java.lang.String newCodigoentidadfederal)  {
        this.codigoentidadfederal = newCodigoentidadfederal;
    }

    public java.lang.String getLocalidad() {
        return this.localidad;
    }

    public void setLocalidad(java.lang.String newLocalidad)  {
        this.localidad = newLocalidad;
    }

    public java.lang.String getCodigos() {
        return this.codigos;
    }

    public void setCodigos(java.lang.String newCodigos)  {
        this.codigos = newCodigos;
    }

}

