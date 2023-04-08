/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package stanric.webapp;

/**
 *
 * @author STANRIC PC
 */
abstract class Guest {
        private String fullName;
        private String email;
        private String password;
        private String phNum;

    public void register(String fullName, String email, String password, String phNum) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.phNum = phNum;
        
        //sendToDatabase();
    }
    
    public void login(String email,String password){
        this.email = email;
        this.password = password;
        UserClass u = new UserClass();
        u.login(email, password);
    }
        
        
    
}
