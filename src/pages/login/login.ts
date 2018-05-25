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

  login(){
    let data = [{email: this.todo.controls.email, password: this.todo.controls.password}];
    
    const result = this._authProvider.login(data)
    .then((data) => {
      console.log(data);
      //   this.navCtrl.push("TabsPage");
    })
    .catch((err ) => {
      console.log(err);
      this.toast.create({
        message: err.message
      }).present();
    });
  }

  autorize(){
    if(this.storage.get('local_session_auth')){
      this.navCtrl.push("TabsPage");
      // setTimeout(() => this.splash = false, 4000);
    } else {
      setTimeout(() => this.splash = false, 4000);
    }    
  }
}



