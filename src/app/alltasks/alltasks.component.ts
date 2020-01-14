import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent implements OnInit {

  tasks = [];
  constructor(private db : DatabaseService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.db.getTasks().subscribe((data) => {
      this.tasks = data;
    })
  }

  deleteTask(id){
    this.db.deleteTask(id).subscribe((data) => {
      console.log(data);
      this.getTasks();
    })
  }
}
