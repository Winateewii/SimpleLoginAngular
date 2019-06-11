import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HelloWorldBean{
  constructor( public message : String){

  }
}

export class WelcomeDataService {

  constructor(
    //import http method มาใช้ จาก aungilarcommon เท่านั้น 
    //import http มาแล้วก็อย่าลืมเอาไปใส้ใน app module ด้วยนะจ๊ะ 
    private http:HttpClient

  ) { }


  executeHelloWorldService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("Execute HelloWorldService")
  }

}
