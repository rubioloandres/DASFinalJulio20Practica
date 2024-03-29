
package ws;

import javax.xml.ws.Endpoint;

/**
 * This class was generated by Apache CXF 3.2.2
 * 2020-06-17T12:08:55.849-03:00
 * Generated source version: 3.2.2
 *
 */

public class CadenaCXFOne_PortTypeServer{

    protected CadenaCXFOne_PortTypeServer() throws Exception {
        System.out.println("Starting Server");
        Object implementor = new ws.CadenaCXFOne();
        String address = "http://localhost:9090/CadenaCXFOnePort";
        Endpoint.publish(address, implementor);
    }

    public static void main(String args[]) throws Exception {
        new CadenaCXFOne_PortTypeServer();
        System.out.println("Server ready...");

        Thread.sleep(5 * 60 * 1000);
        System.out.println("Server exiting");
        System.exit(0);
    }
}

