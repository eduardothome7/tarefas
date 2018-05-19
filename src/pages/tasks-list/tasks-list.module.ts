import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksListPage } from './tasks-list';

@NgModule({
  declarations: [
    TasksListPage,
  ],
  imports: [
    IonicPageModule.forChild(TasksListPage),
  ],
  exports: [
    TasksListPage
  ]
})
export class TasksListPageModule {}
