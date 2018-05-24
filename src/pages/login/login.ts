import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksProvider } from '../../providers/tasks/tasks';
import { SessionAuth } from '../../model/session_auth';
import { AuthProvider } from '../../providers/session/auth';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private todo : FormGroup;
  private splash = true;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private formBuilder: FormBuilder,
              private provider: TasksProvider,
              private toast: ToastController,
              private _authProvider: AuthProvider,
              private storage: Storage) {
    
    
    this.todo = this.formBuilder.group({
      email: ['eduardo@hotmail.com', Validators.required],
      password: ['wqew12345', Validators.required]
    });
  }

  ionViewDidLoad() {
    this.storage.clear();
    this.autorize();
  }

  async login(){
    let data :any = [{email: this.todo.controls.email, password: this.todo.controls.password}];
    
    const result :any = await this._authProvider.login(data);

    try {
      console.log("login: "+result);
      let session :SessionAuth = result;
      console.log(session);
      this.storage.set('local_session_auth', session);
      this.navCtrl.push("TabsPage");
    } catch(error){
      console.log(error);
    }
  }

  autorize(){
    if(this.storage.get('local_session_auth')){
      this.navCtrl.push("TabsPage");
    } else {
      setTimeout(() => this.splash = false, 4000);
    }    
  }
}



