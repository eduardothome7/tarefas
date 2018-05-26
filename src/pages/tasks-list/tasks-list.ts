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

  public tasks: Task[];
  tasksClosed: Task[];
  status :string;
  section :string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private _provider: TasksProvider, 
              private _authProvider :AuthProvider) {
    this.status = "opened";
    this.section = "my";
  }

  ionViewDidLoad() {
    this.fetchAll();
    this.fetchAllClosed();
  }

  ionViewDidEnter(){
    console.log("recarrega");
    this.fetchAll();
    this.fetchAllClosed();
  }
  
  async fetchAll(){
    const result :any = await this._provider.getAll('opened');
    
    try {
      this.tasks = result;
    } catch (error) {
      console.log("Erro");
    }
  }

  async fetchAllClosed(){
    const result :any = await this._provider.getAll('closed');

    try {
      this.tasksClosed = result;
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
