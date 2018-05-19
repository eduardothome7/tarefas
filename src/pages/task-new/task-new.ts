import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksProvider } from '../../providers/tasks/tasks';

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

  save(){
    let task = [{ 
      id: '',
      title: this.todo.get("title"),
      category_id: '',
      status: '',
      start_at:'',
      estimate_at: '',
      closed_at:'',
      description: '',
      estimate_min: '',
      project_id: '',
      team_id: ''
    }];

    console.log(task);
  }
}
