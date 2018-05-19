import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskShowPage } from './task-show';

@NgModule({
  declarations: [
    TaskShowPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskShowPage),
  ],
  exports: [
    TaskShowPage
  ]
})
export class TaskShowPageModule {}
