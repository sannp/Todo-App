import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db : HttpClient) { }

  httpoption = {
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  }

  addTask(data){
    return this.db.post("http://localhost/tasks/addTask.php",data,this.httpoption);
  }

  getTasks(){
    return this.db.get("http://localhost/tasks/getTasks.php");
  }

  getdTask(id){
    return this.db.get("http://localhost/tasks/getTask.php?id=" + id);
  }

  updateTask(d){
    return this.db.put("http://localhost/tasks/updateTask.php",d, this.httpoption);
  }

  deleteTask(id){
    return this.db.delete("http://localhost/tasks/deleteTask.php?id=" + id);
  }
}
