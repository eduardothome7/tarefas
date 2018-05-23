import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasksProvider } from '../../providers/tasks/tasks';
import { Task } from '../../model/task';
import { AuthProvider } from '../../providers/session/auth';

@IonicPage()
@Component({
  selector: 'page-tasks-list',
  templateUrl: 'tasks-list.html',
})
export class TasksListPage {

  tasks: Task[];
  status;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private _provider: TasksProvider, 
              private _authProvider :AuthProvider) {
    this.status = "opened";
    console.log(this._authProvider.getSession());
  }

  ionViewDidLoad() {
    this.fetchAll();
  }

  async fetchAll(){
    const result :any = await this._provider.getAll();

    try {
      this.tasks = result;
    } catch (error) {
      console.log("Erro");
    }
  }

  showTask(task: Task){
    this.navCtrl.push("TaskShowPage", {task: task});
  }

  newTask(){
    this.navCtrl.push("TaskNewPage");
  }

}
