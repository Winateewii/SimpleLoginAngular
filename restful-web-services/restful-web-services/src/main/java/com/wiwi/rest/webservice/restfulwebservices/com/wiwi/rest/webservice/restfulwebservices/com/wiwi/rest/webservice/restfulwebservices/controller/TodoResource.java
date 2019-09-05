package com.wiwi.rest.webservice.restfulwebservices.com.wiwi.rest.webservice.restfulwebservices.com.wiwi.rest.webservice.restfulwebservices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.wiwi.rest.webservice.restfulwebservices.com.wiwi.rest.webservice.restfulwebservices.services.TodoHardcodeService;
import com.wiwi.rest.webservice.restfulwebservices.com.wiwi.rest.webservice.restfulwebservices.bean.Todo;

@RestController
public class TodoResource {

  @Autowired
  private TodoHardcodeService todoService;

  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("/users/{username}/todos")
  public List<Todo>getAllTodos(@PathVariable String username){
    return todoService.findAll();
  }

  @CrossOrigin(origins = "http://localhost:4200")
  @DeleteMapping("/users/{username}/todos/{id}")
  public ResponseEntity<Void> deleteTodo (@PathVariable String username ,@PathVariable long id){
    Todo todo = todoService.deleteById(id);
    if (todo != null){
      return ResponseEntity.noContent().build();
    }
      return ResponseEntity.notFound().build();
  }

}
