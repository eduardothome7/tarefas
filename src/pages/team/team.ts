import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasksProvider } from '../../providers/tasks/tasks';
import { Team } from '../../model/team';

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {
  public teams : Team[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private _provider: TasksProvider) {
              
    this.fetchAll();
  }

  async fetchAll(){
    const result : any = await this._provider.getTeams();
    
    try {
      this.teams = result;
    } catch(error) {
      console.log("Erro ao carregar equipes. Tente novamente.");
    }
  }

  ionViewDidLoad() {
    
  }

}
