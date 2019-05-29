//package com.in28minutes.springboot.web;

//import org.springgramework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';

//@ComponentScan(
//        value = "com.in28minutes.springboot.web" )

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootFirstWebApplication implements SomeInterface{
export class WelcomeComponent implements OnInit {

  //String message = "Some Welcome Message"
  message : String = 'Some Welcome Message'
  name : String

  //public SpringBootFirstWebApplication(){
  
  //ActivetedRoute คือแสดงค่า path ปัจจุบันออกมาใช้ได้ง่าย ๆ
  constructor(private route : ActivatedRoute) { }

  // void init(){
  ngOnInit(){
    // this.message = 5 ประกาศข้างนอกแล้วจะประกาศในนี้ซ้ำอีกไม่ได้
    console.log(this.message)
    // เราต้อง import ActivatedRoute เพื่อใช้คำสั่งในการดึง id จาก paramMap ตามด้วย get(“parameter”) ที่เรา config routes ในไฟล์ app.component.ts ยังจำกันได้ไหมเอ่ยย ??? editWiki/:id ตรงนี้แหละที่เป็นชื่อ parameter ที่เราจะส่งไปยัง method this.route.snapshot.paramMap.get(“id”)
    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }

}

export class Class{

}
