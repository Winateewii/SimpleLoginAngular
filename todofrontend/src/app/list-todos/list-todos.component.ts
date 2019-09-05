import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo  {
  constructor(
    public id : number ,
    public description : string ,
    public done : boolean,
    public targetDate : Date

  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // อันนี้ประกาศเพื่อดึงค่าจากหลังบ้านเนอะ
  todos : Todo[]
  message : String
  check : boolean
  
  ////ส่วนนี้ไว้ฮาร์ดโค้ดทำหน้าบ้านจ้าา
  // = [
  //   new Todo(1,'aaaa',false,new Date()),
  //   new Todo(2,'bbbb',false,new Date()),
  //   new Todo(3,'cccc',false,new Date())
  //   // {id : 1 , description :'xxx'},
  //   // {id : 2 , description :'ccc'},
  //   // {id : 3 , description :'bbb'}
  // ]

  // todo = {
  //   id : 1,
  //   description :'play pokemon'
  // }

  constructor(
    private todoService :TodoDataService
  ) { }

  ngOnInit() {
      this.refreshTodo();
      
  }

  refreshTodo(){
    this.todoService.retrieveAllTodo('wiwi').subscribe(
      respone => {
          console.log(respone);
          this.todos = respone;
      }
    )
  }

  deleteTodo(id){
    console.log("delete already")
    this.todoService.deleteTodo('wiwi',id).subscribe(
      response => {
        console.log(response)
        this.check = true;
        this.message = `Delete of Todo ${id} Successful`;
        this.refreshTodo();
      }
    )
  }

}
