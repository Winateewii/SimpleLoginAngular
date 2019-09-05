package com.wiwi.rest.webservice.restfulwebservices.com.wiwi.rest.webservice.restfulwebservices.bean;

import java.util.Date;

public class Todo {
    private long id;
    private  String username;
    private  String  description;
    private Date targetDate;
    private boolean isDone;

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Date getTargetDate() {
    return targetDate;
  }

  public void setTargetDate(Date targetDate) {
    this.targetDate = targetDate;
  }

  public boolean isDone() {
    return isDone;
  }

  public void setDone(boolean done) {
    isDone = done;
  }

  public Todo(long id, String username, String description, Date targetDate, boolean isDone) {
    this.id = id;
    this.username = username;
    this.description = description;
    this.targetDate = targetDate;
    this.isDone = isDone;
  }

  public Todo(long id) {
    this.id = id;
  }

  @Override
  public String toString() {
    return "Todo{" +
        "id=" + id +
        ", username='" + username + '\'' +
        ", description='" + description + '\'' +
        ", targetDate=" + targetDate +
        ", isDone=" + isDone +
        '}';
  }
}
