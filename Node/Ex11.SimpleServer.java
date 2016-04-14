import java.io.*;
import java.net.*;
import java.security.*;

class doComms implements Runnable {
    public void run () {
        DataInputStream in = new DataInputStream (server.getInputStream());
        PrintStream out = new PrintStream(server.getOutputStream());

        while((line = in.readLine()) != null && !line.equals(".")) {
          input=input + line;
        }
        out.println("I got:" + line);
        System.out.println("Overall message is:" + input);
        out.println("Overall message is:" + input);
        server.close();
    }
}

public class sample_server {
      public static void main(String[] args) {
          int i=0;

          ServerSocket listener = new ServerSocket(port);
          Socket server;
        
          doComms connection;

          server = listener.accept();
          doComms conn_c= new doComms(server);
          Thread t = new Thread(conn_c); t.start();
      }
}

