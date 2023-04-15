/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package stanric.webapp;

import java.io.PrintWriter;
import static java.lang.System.out;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
/**
 *
 * @author STANRIC PC
 */
public class Utility {
public static Connection getConnection(){
        Connection con=null;
        try{
            Class.forName("oracle.jdbc.driver.OracleDriver");
            con=DriverManager.getConnection("jdbc:oracle:thin:@win-server:1521/pdb2102441", "ug2102441", "sybsc");
        }
        catch(Exception e){
            out.println(e);
        }
        return con;
    }
    
    public static Connection insertdata(PrintWriter out,String fname,String email,String pass,String uname, String pno){
        Connection conn=getConnection();
        
        String sqlquery="insert into REGISTER values(?,?,?,?,?)";
        int r=0;
        try{
            PreparedStatement ps=conn.prepareStatement(sqlquery);
            ps.setString(1, fname);
            ps.setString(2, email);
            ps.setString(3, pass);
            ps.setString(4, uname);
            ps.setString(5, pno);
            r=ps.executeUpdate();
        }
        catch(SQLException e){
            out.println(e);
        }
        return conn;
    }
    
 
    
}