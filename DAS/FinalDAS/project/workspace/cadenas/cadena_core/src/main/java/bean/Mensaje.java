package bean;

import com.google.gson.annotations.SerializedName;
import db.Bean;

public class Mensaje implements Bean {

    // @SerializedName("idSucursal")
    private short idSucursal;

    @SerializedName("nombre")
    private String nombre;

    @SerializedName("apellido")
    private String apellido;

    @SerializedName("mensaje")
    private String mensaje;

    @SerializedName("email")
    private String email;

    public short getIdSucursal() {       return idSucursal;   }

    public void setIdSucursal(short idSucursal) {       this.idSucursal = idSucursal;   }

    public String getNombre() {     return nombre;   }

    public void setNombre(String nombre) {       this.nombre = nombre;   }

    public String getApellido() {       return apellido;   }

    public void setApellido(String apellido) {       this.apellido = apellido;   }

    public String getMensaje() {       return mensaje;   }

    public void setMensaje(String mensaje) {       this.mensaje = mensaje;   }

    public String getEmail() {       return email;   }

    public void setEmail(String email) {       this.email = email;   }
}
