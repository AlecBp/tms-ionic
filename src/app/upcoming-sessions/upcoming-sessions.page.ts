import {Component, OnInit} from '@angular/core';
// import { Session } from '../types';
import {ToastController} from '@ionic/angular';
import {Apollo, gql} from 'apollo-angular';
import {NavigationExtras, Router} from '@angular/router';
import {Session} from '../type';

@Component({
  selector: 'app-upcoming-sessions',
  templateUrl: './upcoming-sessions.page.html',
  styleUrls: ['./upcoming-sessions.page.scss'],
})
export class UpcomingSessionsPage implements OnInit {
  upcomingSessions: Session[];
  sessions: Session[];
  loading = true;
  error: any;
  LOGOUT = gql`
    mutation logout {
      logout
    }
  `;

  constructor(
    public toastController: ToastController,
    private router: Router,
    private apollo: Apollo,
  ) {}

  async ngOnInit() {
    this.apollo
    .watchQuery({
      query: gql`
        {
          sessions {
            id
            date
            time
            subjects {
              name
              level
            }
            location
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      this.upcomingSessions = result?.data?.sessions;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

  debugger(val: any): void {
    console.log(val);
  }

  navigate(id: string) {
    console.log(id);
    this.router.navigate([`/session/${id}`]);
  }


  async handleLoggedOut() {
    await this.apollo
      .mutate({mutation: this.LOGOUT})
      .subscribe(
        async ({data}) => {
          this.router.navigate(['/login']);

          const toast = await this.toastController.create({
            message: 'Successfully Logged Out',
            duration: 2000,
            color: 'success',
            position: 'top',
          });
          toast.present();
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
