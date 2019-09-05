package com.wiwi.rest.webservice.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.wiwi.rest.webservice.restfulwebservices.helloworld.HelloWorldBean;

@CrossOrigin(origins = "http://localhost:4200")  // เพื่อให้หน้าบ้านรับค่าหลังบ้านได้ด้วย
@RestController
public class HelloWorldController {
//    เขียนได้หลายแบบ
//  @RequestMapping(method = RequestMethod.GET,path = "/hello-world")
  @GetMapping(path = "/hello-world")
  public String helloWorld(){
    return "Hello World";
  }

  @GetMapping(path = "/hello-world-bean")
  public HelloWorldBean helloWorldBean(){
   throw new RuntimeException("Some Error has Happened! Contact Support at ***-***") ;
//    return new HelloWorldBean("Hello World");
  }

  @GetMapping(path = "/hello-world/path-variable/{name}")
  public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
    return new HelloWorldBean("Hello World "+name);
    //(String("Hello World,%s",name));
  }

}
