import { Component, OnInit } from '@angular/core';

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

  todos = [
    new Todo(1,'aaaa',false,new Date()),
    new Todo(2,'bbbb',false,new Date()),
    new Todo(3,'cccc',false,new Date())
    // {id : 1 , description :'xxx'},
    // {id : 2 , description :'ccc'},
    // {id : 3 , description :'bbb'}
  ]

  // todo = {
  //   id : 1,
  //   description :'play pokemon'
  // }

  constructor() { }

  ngOnInit() {
  }

}
