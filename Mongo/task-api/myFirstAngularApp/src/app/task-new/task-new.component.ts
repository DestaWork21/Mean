import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  newTask: any;
  constructor() { }

  ngOnInit() {
    this.newTask = {title: "", description: ""}
  }
  onSubmit(){
    this.newTask = { titile: "", description: ""}
  }

}
