import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodo(username){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(username,id){
    return this.http.delete<Todo[]>(`http://localhost:8080/users/${username}/todos/${id}`);
  }
}
