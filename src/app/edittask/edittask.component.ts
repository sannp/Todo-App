import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  tid: any;
  tname: any;
  tdes: any;
  tsdate: any;
  tedate: any;

  constructor(private ar: ActivatedRoute, private rout : Router, private db: DatabaseService) { }
  id = this.ar.snapshot.params["taskid"];

  ngOnInit() {
    this.getTask();
  }

  getTask(){
    this.db.getdTask(this.id).subscribe((data) => { 
      this.tid = data.tid;
      this.tname = data.tname;
      this.tdes = data.tdesc;
      this.tsdate = data.tsdata;
      this.tedate = data.tedate;
    })
  }

  updateTask(d){
    this.db.updateTask(d).subscribe((data) => {
      console.log(data);
      this.rout.navigate(['alltask']);
    });
  }

}
