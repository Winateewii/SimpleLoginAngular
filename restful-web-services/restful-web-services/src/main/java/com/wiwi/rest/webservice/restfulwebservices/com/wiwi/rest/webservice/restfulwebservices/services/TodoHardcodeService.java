package com.wiwi.rest.webservice.restfulwebservices.com.wiwi.rest.webservice.restfulwebservices.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.wiwi.rest.webservice.restfulwebservices.com.wiwi.rest.webservice.restfulwebservices.bean.Todo;

@Service
public class TodoHardcodeService {

  private static List<Todo> todos = new ArrayList<>();
  private static int idCounter = 0 ;

  static {
    todos.add(new Todo(++idCounter,"wiwi","save money",new Date(),false));
    todos.add(new Todo(++idCounter,"wiwi","dance",new Date(),false));
  }
  public List<Todo> findAll(){
    return todos;
  }

  public Todo deleteById(long id){
    Todo todo = findById(id);
    if(todo==null) return null;
    if(todos.remove(todo)){
    return todo;}
    return null;
  }

  public Todo findById(long id) {
    for(Todo todo:todos){
      if(todo.getId()==id){
        return todo;
      }
    }
    return null;
  }

}
