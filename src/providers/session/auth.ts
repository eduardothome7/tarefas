import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SessionAuth } from '../../model/session_auth';
import { User } from '../../model/user';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthProvider {
  private API_URL = "https://apitarefasv1.herokuapp.com";

  headers = new HttpHeaders({
		'Content-Type': 'application/json; charset=utf-8',
		'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInVzZXJfbGV2ZWwiOiJ3b3JrZXIiLCJpYXQiOjE1MTMzMTM4ODEsImV4cCI6MTUxMzMxNzQ4M30.IYZ4BnjTZ3K9agI-UEkjVvyr1WvgorM97huMr1A6600'
  });
  
  constructor(public http: HttpClient, private storage :Storage) {
    
  }
  login(login){
    return new Promise((resolve, reject) => {
      const url = `${this.API_URL}/sessions/sign_in.json`;
      this.http.post(url, login, {headers: this.headers})
        // .map(res => res)	  
        .subscribe((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
      });
    });   
  }

  getSession(){
    return this.storage.get('local_session_auth')
  }

  // logOut(){
  //   this.storage.clear();
  // }

}