import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksProvider } from '../../providers/tasks/tasks';
import { Task } from '../../model/task';
import { User } from '../../model/user';
import { Team } from '../../model/team';

@IonicPage()
@Component({
  selector: 'page-task-new',
  templateUrl: 'task-new.html',
})
export class TaskNewPage {

  private todo : FormGroup;
  private categories: any[];
  private projects: any[];
  private users: User[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private _provider: TasksProvider,
              private toastController: ToastController) {
    
    // carrega lista de categorias da API
    this.fetchCategories();    
    this.fetchProjects();
    this.fetchTeamUsers();

    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      category_id: [Validators.required],
      project_id: [Validators.required],
      user_id: [Validators.required],
      start_at: [Validators.required],
      estimate_at: [Validators.required],
      estimate_min: [60, Validators.required]
    });
  }

  fetchCategories(){
    const result :any = this._provider.getCategories()
    .then((result :any[]) => {
      this.categories = result;
    }).catch(error => {
      console.log("error");
    });
  }

  fetchProjects(){
    const result :any = this._provider.getProjects()
    .then((result :any[]) => {
      this.projects = result;
    }).catch(error => {
      console.log("error");
    });
  }

  fetchTeamUsers(){
    const result :any = this._provider.getTeamUsers(4)
    .then((result :any) => {
      let team : Team = result;
      this.users = team.users;
    }).catch(err => {
      console.log(err);
    });
  }

  save(){
    let data = {
      title: this.todo.value.title,
      description: this.todo.value.description,
      user_id: Number(this.todo.value.user_id),
      category_id: Number(this.todo.value.category_id),
      project_id: Number(this.todo.value.project_id),
      start_at: new Date(this.todo.value.start_at).toISOString(),
      estimate_at: new Date(this.todo.value.start_at).toISOString(),
      estimate_min: Number(this.todo.value.estimate_min)
    };

    const result = this._provider.create(data)
    .then((data) => {
      console.log(data);
      this.toastController.create({
        message: 'Tarefa aberta com sucesso!',
        duration: 2000
      }).present();
      this.navCtrl.pop();
    }).catch((err) => {
      console.log(err);
      this.toastController.create({
        message: 'erro ao abrir tarefa',
        duration: 2000
      }).present();
    });    
  }
}
