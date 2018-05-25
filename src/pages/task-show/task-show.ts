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
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private _provider: TasksProvider,
              private toastController :ToastController) {
    this.task = this.navParams.get("task");
    this.fetch();            
  }

  ionViewDidLoad() {
    
  }

  play(){
    const result :any = this._provider.play(this.task.id)
    .then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
      this.toastController.create({
        message: 'erro ao abrir tarefa'
      }).present();
    });

    // try {
    //   console.log(result);
    //   let message:string = (result.playing) ? "Tarefa startada com sucesso" : "Tarefa pausada com sucesso"; 
    //   this._toast.create({
    //     message: message
    //   }); 
    // } catch (error) {
    //   console.log(error);
    // }
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
