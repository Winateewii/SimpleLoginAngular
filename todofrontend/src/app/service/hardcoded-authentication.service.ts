import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {}
    authenticate(username,password){
      console.log('before'+this.isUserLoggedIn());
      if(username==="wiwi" &&password==='wiwi'){
        
        //set เพื่อให้หน้าเว็บจำข้อมูลพอรีเฟรชตรงนี้ละข้อมูลจะหาย
        sessionStorage.setItem('authenticateUser',username);
        console.log('After'+this.isUserLoggedIn());
        return true;
      }
        return false;
    }

    isUserLoggedIn(){
      let user =  sessionStorage.getItem('authenticateUser');
      return !(user==null)
    }

    logout(){
      sessionStorage.removeItem('authenticateUser');
    }

}
