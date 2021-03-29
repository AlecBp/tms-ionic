import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {
  tutor: string;
  students: string[];

  constructor() {
    this.tutor= "John Doe";
    this.students = [];
    this.loadStudents();
  } 

  ngOnInit() {}

  loadStudents() {
    for(let i =0; i<5; i++) {
      this.students.push("Abbey Edward")
    }
  }
}
