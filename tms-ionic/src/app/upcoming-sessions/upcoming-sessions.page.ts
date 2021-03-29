import { Component, OnInit } from '@angular/core';
// import { Session } from '../types';
import { Router } from '@angular/router';
export interface Session {
  date: string;
  time: string;
  subejcts: string[];
  location: string;
}
@Component({
  selector: 'app-upcoming-sessions',
  templateUrl: './upcoming-sessions.page.html',
  styleUrls: ['./upcoming-sessions.page.scss'],
})
export class UpcomingSessionsPage implements OnInit {
  upcomingSessions: Session[];

  constructor() {
    this.upcomingSessions = [];
    this.loadUpcomingSessions();
  }

  ngOnInit() {}

  loadUpcomingSessions(): void {
    const dummySessions: Session = {
      date: 'Tue - Nov 10',
      time: '4:00PM - 6:00PM',
      subejcts: ['Math', 'English'],
      location: 'George Brown College',
    };

    for (let i = 0; i < 10; i++) {
      this.upcomingSessions.push(dummySessions);
    }
  }

  debugger(val: any): void {
    console.log(val);
  }
}
