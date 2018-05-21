import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Task } from '../../model/task';
import { TasksProvider } from '../../providers/tasks/tasks';

@IonicPage()
@Component({
  selector: 'page-task-show',
  templateUrl: 'task-show.html',
})
export class TaskShowPage {
  
  task :Task;
  historics: History[] = [];
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private _provider: TasksProvider,
              private _toast :ToastController) {
    this.task = this.navParams.get("task");
    this.historics = this.task.historics;
    this.fetch();            
  }

  ionViewDidLoad() {
    
  }

  async play(){
    const result :any = await this._provider.play(this.task.id);
      
    try {
      console.log(result);
      let message:string = (result.playing) ? "Tarefa startada com sucesso" : "Tarefa pausada com sucesso"; 
      this._toast.create({
        message: message
      }); 
    }catch (error) {

    }
  }

  fetch(){
    const result :any = this._provider.getById(this.task.id)
    .then((result :Task) => {
      this.task = result;
    }).catch(error => {
      console.log("error");
    });
  }

}
