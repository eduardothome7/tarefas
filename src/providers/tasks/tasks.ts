import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../../model/task';
import { DateTime } from 'ionic-angular';

@Injectable()
export class TasksProvider {
  private API_URL = "http://localhost:3000";

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

  play(task_id: number){
    return new Promise((resolve, reject) => {
      const url = this.API_URL + "/tasks/play_pause";
      let data = JSON.stringify({"id":task_id });
    
      this.http.put(url, data)
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

  create(data){
    return new Promise((resolve, reject) => {
      this.http.post(`${this.API_URL}/tasks.json`, data)
      .subscribe((result :any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  getCategories(){
    return new Promise((resolve, reject) => {
			const url = this.API_URL + '/categories.json';
			this.http.get(url)
				.subscribe((result: any) => {
					resolve(result);
				}, (error) => {
					reject(error);
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
