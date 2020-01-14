import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(private db : DatabaseService) { }

  ngOnInit() {
  }

  addTask(s){
    this.db.addTask(s).subscribe((data) => {
      console.log(data);
    })
  }

}
