import { Component, OnInit } from '@angular/core';
// import { Session } from '../types';

export interface Session {
  date: string;
  time: string;
  subjects: string[];
  location: string;
}
@Component({
  selector: 'app-past-sessions',
  templateUrl: './past-sessions.page.html',
  styleUrls: ['./past-sessions.page.scss'],
})
export class PastSessionsPage implements OnInit {
  pastSessions: Session[];

  constructor() {
    this.pastSessions = [];
    this.loadPastSessions();
  }

  ngOnInit() {}

  loadPastSessions(): void {
    const dummySessions: Session = {
      date: 'Tue - Nov 10',
      time: '4:00PM - 6:00PM',
      subjects: ['Math', 'English'],
      location: 'George Brown College',
    };

    for (let i = 0; i < 10; i++) {
      this.pastSessions.push(dummySessions);
    }
  }

  debugger(val: any): void {
    console.log(val);
  }
}
