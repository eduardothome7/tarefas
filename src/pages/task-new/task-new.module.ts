import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskNewPage } from './task-new';

@NgModule({
  declarations: [
    TaskNewPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskNewPage),
  ],
})
export class TaskNewPageModule {}
