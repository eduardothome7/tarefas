import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasksProvider } from '../../providers/tasks/tasks';

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
  projects :any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private _provider: TasksProvider) {
  }

  ionViewDidLoad() {
    this.fetchAll();
  }

  async fetchAll(){
    const result = await this._provider.getProjects();
    try {
      this.projects = result;
    } catch(error){
      console.log(error);
    }
  }
}
