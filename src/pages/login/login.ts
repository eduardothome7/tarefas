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
    this.autorize();
  }

  login(){
    let login = {
              email: this.todo.controls.email, 
              password: this.todo.controls.password, 
              authToken: "VkZkV01WVXliNDBXVmRXYVZwWDQyWTIwNWVHUlhWblphUjFZeVlWaE9iRnBIUm5OYVYyUjVXbGN4Y0dKNlVUTk9lbU4wVUYzMjEyM1RXbz0="};    
    
    const result = this._authProvider.login(login)
    .then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
      // this.toast.create({
      //   message: err.message,
      //   duration: 3000
      // }).present();
    });
    this.navCtrl.push("TabsPage");
  }

  autorize(){
    // if(this.storage.get('local_session_auth')){
    //   setTimeout(() => this.splash = false, 2000);
    //   this.navCtrl.push("TabsPage");
    // } else {
    //   this.navCtrl.push("TabsPage");
    //   setTimeout(() => this.splash = false, 4000);
    // }    
      setTimeout(() => this.splash = false, 4000);
  }
}



