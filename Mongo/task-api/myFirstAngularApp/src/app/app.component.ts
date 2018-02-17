import { Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import { Observable } from 'rxjs/Observable';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent implements OnInit {
  _httpService: any;
  title = 'app';
  tasks = [];
  newTask: any;
  constructor() {}
  // constructor(private _httpService: HttpService){
    
  // }
  ngOnInit(){
    // this.getTasksFromService()
    this.newTask ={title: "", description: "" }
  }
  onSubmit(){
    let observable =this._httpService.addTask(this.newTask);
    observable.subscribe(data =>{
      console.log("Got data from post back", data);
      this.newTask = {title:"", description: ""}
    })
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks()
    Observable.subscribe(data => {
      console.log('Got our data!', data)
      this.tasks =data['tasks'];
    })
  }
}
