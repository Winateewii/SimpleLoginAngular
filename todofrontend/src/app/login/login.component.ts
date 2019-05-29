import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Ctrl+specbar ที่ import Dependancy 

import {HardcodedAuthenticationService} from './../service/hardcoded-authentication.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username :String
  password :String
  errorMessege = 'Invalid Credentials'
  invalidLogin : boolean 

  //Router
  //Angular.giveMeRouter
  //Dependency Injection


  constructor(private router : Router,
    private hardcodedAuthenticationService :HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handlelogin(){
    //****** test basic */
    // // console.log(this.username);
    // // console.log(this.password);
    // if(this.username==="wiwi" && this.password==='wiwi'){
    //   // redirect to Welcome Page 
    //   //navigate help to route to specific page 
    //   //ช่องแรกของ Array คือ page Component ที่ต้องการจะไปใน router

    //   this.router.navigate(['welcome',this.username])
    //   this.invalidLogin = false
    // } else {
    //   this.invalidLogin = true
    // }

    //**hard code */
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
