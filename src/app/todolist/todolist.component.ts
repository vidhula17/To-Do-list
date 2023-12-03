import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  taskArray=[{taskName:'Brush',isCompleted:false}]
  
  constructor(private router: Router) {}


  ngOnInit(): void {
  }

  
  onSubmit(form: NgForm){
    this.taskArray.push({
      taskName:form.controls['task'].value,
      isCompleted:false

    })
    form.reset();
  }
  onDelete(index:number){
    this.taskArray.splice(index,1);
  }
  onCheck(index:number){
    this.taskArray[index].  isCompleted=!this.taskArray[index].isCompleted;
  }
  


}
