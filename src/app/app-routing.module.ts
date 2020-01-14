import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlltasksComponent } from './alltasks/alltasks.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';


const routes: Routes = [
  {path: 'alltask', component: AlltasksComponent},
  {path: 'addnewtask', component: AddtaskComponent},
  {path: 'task/:taskid', component: EdittaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
