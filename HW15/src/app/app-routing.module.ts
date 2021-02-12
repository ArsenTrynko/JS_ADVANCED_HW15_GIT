import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Task1Component } from './tasks/task1/task1.component';
import { Task2Component } from './tasks/task2/task2.component';
import { Task3Component } from './tasks/task3/task3.component';

const routes: Routes = [
  {path: 'task1', component: Task1Component},
  {path: 'task2', component: Task2Component},
  {path: 'task3', component: Task3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
