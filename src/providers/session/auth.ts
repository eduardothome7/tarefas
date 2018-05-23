import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SessionAuth } from '../../model/session_auth';
import { User } from '../../model/user';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthProvider {
  private API_URL = "http://localhost:3000";

  constructor(public http: HttpClient, private storage :Storage) {
    
  }
  login(data){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'text/javascript',
      'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInVzZXJfbGV2ZWwiOiJ3b3JrZXIiLCJpYXQiOjE1MTMzMTM4ODEsImV4cCI6MTUxMzMxNzQ4M30.IYZ4BnjTZ3K9agI-UEkjVvyr1WvgorM97huMr1A6600'
    });
    
    return new Promise((resolve, reject) => {
      const url = this.API_URL + '/auth/sign_in';
      
      this.http.post(url, {email: data.email, password: data.password}, {headers:headers})
        .subscribe((result: any) => {
          resolve(result);
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