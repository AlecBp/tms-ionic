import { Component, OnInit } from '@angular/core';
// import { Session } from '../types';

export interface Session {
  id: number;
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
    this.pastSessions = [
      {
        id: 10,
        date: 'Tue - Feb 2',
        time: '4:00PM - 6:00PM',
        subjects: ['Math', 'English'],
        location: 'George Brown College',
      },
      {
        id: 11,
        date: 'Tue - Feb 9',
        time: '4:00PM - 6:00PM',
        subjects: ['Math'],
        location: 'George Brown College',
      },
      {
        id: 12,
        date: 'Tue - Feb 16',
        time: '4:00PM - 6:00PM',
        subjects: ['English'],
        location: 'George Brown College',
      },
      {
        id: 13,
        date: 'Tue - Feb 26',
        time: '4:00PM - 6:00PM',
        subjects: ['Math', 'English'],
        location: 'George Brown College',
      },
      {
        id: 14,
        date: 'Tue - Mar 2',
        time: '4:00PM - 6:00PM',
        subjects: ['Math', 'English'],
        location: 'George Brown College',
      },
      {
        id: 15,
        date: 'Tue - Mar 9',
        time: '4:00PM - 6:00PM',
        subjects: ['Math'],
        location: 'George Brown College',
      },
      {
        id: 16,
        date: 'Tue - Mar 16',
        time: '4:00PM - 6:00PM',
        subjects: ['English'],
        location: 'George Brown College',
      },
      {
        id: 17,
        date: 'Tue - Mar 23',
        time: '4:00PM - 6:00PM',
        subjects: ['Math', 'English'],
        location: 'George Brown College',
      },
    ];
    // this.loadPastSessions();
  }

  ngOnInit() {}

  // loadPastSessions(): void {
  //   const dummySessions: Session = {
  //     date: 'Tue - Nov 10',
  //     time: '4:00PM - 6:00PM',
  //     subjects: ['Math', 'English'],
  //     location: 'George Brown College',
  //   };

  //   for (let i = 0; i < 10; i++) {
  //     this.pastSessions.push(dummySessions);
  //   }
  // }

  debugger(val: any): void {
    console.log(val);
  }
}
