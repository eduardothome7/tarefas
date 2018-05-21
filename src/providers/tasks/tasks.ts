import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../../model/task';
import { DateTime } from 'ionic-angular';

@Injectable()
export class TasksProvider {
  private API_URL = "http://minhastarefasapiv1.herokuapp.com";

  constructor(public http: HttpClient) {
    
  }

  getAll(){
    return new Promise((resolve, reject) => {
			const url = this.API_URL + '/tasks.json';

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
      let data = [
                  { "id":task_id }
                ];
    
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

  create(task: any){
    return new Promise((resolve, reject) => {
      const url = this.API_URL + "/tasks";
      const data = task;
      this.http.post(url, data)
      .subscribe((result :any) => {
        resolve(result);
      }, (error) => {
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

  login(login :any){
    let now :string = new Date().toISOString();
    let session : any = [{
                          id:1,
                          user_id:7,
                          token: '38093820432'
                        }];
    return session;
  }

  update(){

  }
  destroy(){

  }

}
