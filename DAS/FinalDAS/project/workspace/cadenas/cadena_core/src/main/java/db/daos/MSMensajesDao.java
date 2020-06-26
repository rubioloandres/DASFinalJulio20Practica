package db.daos;

import bean.Mensaje;
import db.Bean;
import db.DaoImpl;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

public class MSMensajesDao extends DaoImpl {

    @Override
    public Bean make(ResultSet result) throws SQLException {
        Mensaje mje = new Mensaje();
        mje.setIdSucursal(result.getShort("idSucursal"));
        mje.setNombre( result.getString("nombre") );
        mje.setApellido(result.getString("apellido"));
        mje.setMensaje(result.getString("mensaje"));
        mje.setEmail(result.getString("email"));
        return mje;
    }

    @Override
    public void insert(Bean bean) throws SQLException {
    }

    @Override
    public void insertBatch(List<Bean> beans) throws SQLException {
        Mensaje mje;
        List<Mensaje> mensajes = new LinkedList<>();

        for(Bean bean: beans){
            mje = (Mensaje) bean;
            mensajes.add(mje);
        }

        this.connect();
        this.setProcedure( "dbo.SP_INSERTMENSAJE(?,?,?,?,?)" );
        for (Mensaje mensaje : mensajes){
            this.setParameter(1, mensaje.getIdSucursal());
            this.setParameter(2, mensaje.getNombre());
            this.setParameter(3, mensaje.getApellido());
            this.setParameter(4, mensaje.getMensaje());
            this.setParameter(5, mensaje.getEmail());
            this.addBatch();
        }

        this.executeBatch();
        this.disconnect();
    }


    @Override
    public void update(Bean bean) throws SQLException {

    }

    @Override
    public void delete(Bean bean) throws SQLException {

    }


    @Override
    public List<Bean> select(Bean bean) throws SQLException {
        return null;
    }

    @Override
    public boolean valid(Bean bean) throws SQLException {
        return false;
    }
}
