/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package stanric.webapp;

import java.sql.*;

/**
 *
 * @author STANRIC PC
 */
public class UserClass {
        private String fullName;
        private String email;
        private String password;
        private String phNum;

    public UserClass(String fullName, String email, String password, String phNum) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.phNum = phNum;
    }
        
        
        
    
    public static ResultSet login(String email,String password,Connection connection, HttpSession s1){
        ResultSet rs = null;
        String check = "Select * from UserDetails where email=? and password=?";
        try{
            PreparedStatement ps = connection.prepareStatement(check);
            ps.setString(1, email);
            ps.setString(2, password);
            rs = ps.executeQuery();
            if(rs.next()){
                String fullName = rs.getString("fullName");
                
                String phoneNum = rs.getString("phoneNum");
                
                UserClass u = new UserClass(fullName,email,password,phoneNum);
                
            }
        }catch(Exception e){
            
        }
        finally{
            return rs;
        }
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhNum() {
        return phNum;
    }

    public void setPhNum(String phNum) {
        this.phNum = phNum;
    }
    
    
    
    
    public void addToCart(){
        
        
        
    }
    public void removeFromCart(){
        
        
        
    }
    
    public void postBlog(){}
    public void postComments(){}
    public void logout(UserClass u){
        u.invalidate();
    }
}
