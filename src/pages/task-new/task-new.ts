import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksProvider } from '../../providers/tasks/tasks';
import { Task } from '../../model/task';

@IonicPage()
@Component({
  selector: 'page-task-new',
  templateUrl: 'task-new.html',
})
export class TaskNewPage {

  private todo : FormGroup;
  private categories: any[];
  private projects: any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private _provider: TasksProvider) {
    
    // carrega lista de categorias da API
    this.fetchCategories();    
    this.fetchProjects();

    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      category_id: [10, Validators.required],
      project_id: [7, Validators.required],
      start_at: [ Validators.required],
      estimate_at: [ Validators.required],
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

  async save(){
    let data = [{
      title: this.todo.value.title,
      description: this.todo.value.description,
      category_id: this.todo.value.category_id,
      project_id: this.todo.value.project_id,
      start_at: new Date(this.todo.value.start_at).toISOString(),
      estimate_at: new Date(this.todo.value.start_at).toISOString(),
      estimate_min: this.todo.value.estimate_min
    }];

    const result = await this._provider.create(data);
    
    try {
      console.log("Ok");
    } catch(error){
      console.log("Erro:"+error);
    }
  }
}
