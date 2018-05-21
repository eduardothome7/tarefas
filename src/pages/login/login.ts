import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksProvider } from '../../providers/tasks/tasks';
import { SessionAuth } from '../../model/session_auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private todo : FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private formBuilder: FormBuilder,
              private provider: TasksProvider,
              private toast: ToastController) {
    this.todo = this.formBuilder.group({
      email: ['usuario@hotmail.com', Validators.required],
      password: ['u1s2e3r4', Validators.required]
    });
  }

  ionViewDidLoad() {
  }

  async login(){
    let data :any = [{email: this.todo.controls.email, 
                      password: this.todo.controls.password
                    }];
    
    const result :any = await this.provider.login(data);

    try {
      console.log(result.user_id);
    } catch(error){
      console.log(error);
    }
  }
}
