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
  playing :boolean; 
  section :string;   

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private _provider: TasksProvider,
              private toastController :ToastController) {
    this.task = this.navParams.get("task");
    this.fetch();            
    this.section = "description";
  }

  ionViewDidLoad() {
    
  }

  canFinish(){
    let today = new Date();
    // this.task.estimate_at.
    let estimate_at = new Date("20/05/2018");
    // let estimate_at = new Date(this.task.estimate_at);
    if(today >= estimate_at){
      return true;
    } else {
      return false;
    }
  }

  play(){
    const result :any = this._provider.play(this.task.id)
    .then((data) => {
      console.log(data);
      this.playing = !this.playing;
    }).catch((err) => {
      console.log(err);
      this.playing = !this.playing;
      // this.toastController.create({
        // message: 'Erro ao iniciar/pausar tarefa'
      // }).present();
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
    .then((data :Task) => {
      //toggle state
      this.task = data;
      this.playing = data.playing
      //this.playing = data.playing;
    }).catch(error => {
      console.log("error");
    });
  }

}
