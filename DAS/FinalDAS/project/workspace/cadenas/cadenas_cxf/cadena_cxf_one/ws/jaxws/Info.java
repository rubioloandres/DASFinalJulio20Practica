
package ws.jaxws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * This class was generated by Apache CXF 3.2.2
 * Sun Apr 21 21:41:37 ART 2019
 * Generated source version: 3.2.2
 */

@XmlRootElement(name = "info", namespace = "http://ws.das.edu.ubp.ar/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "info", namespace = "http://ws.das.edu.ubp.ar/", propOrder = {"identificador", "idsucursal"})

public class Info {

    @XmlElement(name = "identificador")
    private java.lang.String identificador;
    @XmlElement(name = "idsucursal")
    private java.lang.Long idsucursal;

    public java.lang.String getIdentificador() {
        return this.identificador;
    }

    public void setIdentificador(java.lang.String newIdentificador)  {
        this.identificador = newIdentificador;
    }

    public java.lang.Long getIdsucursal() {
        return this.idsucursal;
    }

    public void setIdsucursal(java.lang.Long newIdsucursal)  {
        this.idsucursal = newIdsucursal;
    }

}

