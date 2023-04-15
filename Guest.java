/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package stanric.webapp;
import java.sql.*;
/**
 *
 * @author STANRIC PC
 */
public class Guest {
       

    public static int register(String fullName, String email, String password, String phNum) {
       int status = 0;
       Connection con = null;
       try{
           con = Utility.getConnection();
           PreparedStatement prepStat = con.prepareStatement("Insert into UserDetails");
           prepStat.setString(1,fullName);
           prepStat.setString(2,email);
           prepStat.setString(3,password);
           prepStat.setString(4,phNum);
           status = prepStat.executeUpdate();
           
       }catch(Exception e){
           
       }finally{
           return status;
       }
        
        //sendToDatabase();
    }
    
   
        
        
    
}
