import { Component, OnInit } from '@angular/core';
// import { Session } from '../types';
import { ToastController } from '@ionic/angular';

export interface Session {
  id: number;
  date: string;
  time: string;
  subjects: string[];
  location: string;
}
@Component({
  selector: 'app-upcoming-sessions',
  templateUrl: './upcoming-sessions.page.html',
  styleUrls: ['./upcoming-sessions.page.scss'],
})
export class UpcomingSessionsPage implements OnInit {
  upcomingSessions: Session[];

  constructor(public toastController: ToastController) {
    this.upcomingSessions = [
      {
        id: 1,
        date: 'Tue - Mar 30',
        time: '5:00PM - 6:00PM',
        subjects: ['Math', 'English'],
        location: 'George Brown College',
      },
      {
        id: 2,
        date: 'Tue - Apr 6',
        time: '4:00PM - 6:00PM',
        subjects: ['Math'],
        location: 'George Brown College',
      },
      {
        id: 3,
        date: 'Tue - Apr 13',
        time: '4:00PM - 5:00PM',
        subjects: ['English'],
        location: 'George Brown College',
      },
      {
        id: 4,
        date: 'Tue - Apr 20',
        time: '4:00PM - 6:00PM',
        subjects: ['Science'],
        location: 'George Brown College',
      },
      {
        id: 5,
        date: 'Tue - Apr 27',
        time: '5:00PM - 6:00PM',
        subjects: ['French', 'English'],
        location: 'George Brown College',
      },
      {
        id: 6,
        date: 'Tue - May 4',
        time: '4:00PM - 6:00PM',
        subjects: ['Math', 'English'],
        location: 'George Brown College',
      },
      {
        id: 7,
        date: 'Tue - May 11',
        time: '4:00PM - 5:00PM',
        subjects: ['Math'],
        location: 'George Brown College',
      },
    ];
    // this.loadUpcomingSessions();
  }

  ngOnInit() {}

  // loadUpcomingSessions(): void {
  //   const dummySessions: Session = {
  //     date: 'Tue - Nov 10',
  //     time: '4:00PM - 6:00PM',
  //     subjects: ['Math', 'English'],
  //     location: 'George Brown College',
  //   };

  //   for (let i = 0; i < 10; i++) {
  //     this.upcomingSessions.push(dummySessions);
  //   }
  // }

  debugger(val: any): void {
    console.log(val);
  }

  async handleLoggedOut() {
    const toast = await this.toastController.create({
      message: 'Successfully Logged Out',
      duration: 2000,
      color: 'success',
      position: 'top',
    });
    toast.present();
  }
}
