import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../../model/task';
import { DateTime } from 'ionic-angular';

@Injectable()
export class TasksProvider {
  private API_URL = "http://localhost:3000";
  // private API_URL = "http://minhastarefasapiv1.herokuapp.com";
	headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Accept': 'text/javascript',
		'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInVzZXJfbGV2ZWwiOiJ3b3JrZXIiLCJpYXQiOjE1MTMzMTM4ODEsImV4cCI6MTUxMzMxNzQ4M30.IYZ4BnjTZ3K9agI-UEkjVvyr1WvgorM97huMr1A6600'
	});

  constructor(public http: HttpClient) {
    
  }

  getAll(status){
    return new Promise((resolve, reject) => {
			const url = `${this.API_URL}/tasks.json?status=${status}`;

			this.http.get(url)
				.subscribe((result: any) => {
					resolve(result);
				}, (error) => {
					reject(error);
				});
		});
  }

  play(task_id){
		return new Promise((resolve, reject) => {
			const url = `${this.API_URL}/tasks/play_pause`;
      this.http.put(url, {id: task_id},{headers: this.headers})
        .subscribe((result :any) => {
          resolve(result);
        }, (error) => {
          reject(error);
      });
    });
  }

  getById(id: number){
    return new Promise((resolve, reject) => {
			const url = this.API_URL + '/tasks/'+id+'.json';

			this.http.get(url)
				.subscribe((result: any) => {
					resolve(result);
				}, (error) => {
					reject(error);
				});
		});
  }

  create(task){
    return new Promise((resolve, reject) => {
      this.http.post(`${this.API_URL}/tasks.json`, task)
      .subscribe((result :any) => {
        resolve(result);
      }, (err :any) => {
        reject(err.error);
      });
    });
  }

  getCategories(){
    return new Promise((resolve, reject) => {
			const url = this.API_URL + '/categories.json';
			this.http.get(url)
				.subscribe((result: any) => {
					resolve(result);
				}, (err) => {
					reject(err);
				});
		});
  }

  getStatus(){
    return new Promise((resolve, reject) => {
			const url = this.API_URL + '/statuses.json';
			this.http.get(url)
				.subscribe((result: any) => {
					resolve(result);
				}, (error) => {
					reject(error);
				});
		});
  }

  getProjects(){
    return new Promise((resolve, reject) => {
			const url = this.API_URL + '/projects.json';
			this.http.get(url)
				.subscribe((result: any) => {
					resolve(result);
				}, (error) => {
					reject(error);
				});
		});
  }

  getTeams(){
    return new Promise((resolve, reject) => {
			const url = this.API_URL + '/teams.json';
			this.http.get(url)
				.subscribe((result: any) => {
					resolve(result);
				}, (error) => {
					reject(error);
				});
		});
  }

  update(){

  }
  destroy(){

  }

}
