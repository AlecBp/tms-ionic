import {Component, OnInit} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {Apollo, gql} from 'apollo-angular';
import {ActivatedRoute, Router} from '@angular/router';
import {Session} from '../type';

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {
  sessionId: string;

  tutor: string;
  students: string[];
  session: Session;
  loading = true;
  error: any;

  SESSION = gql`
    query session($id: ID!) {
      session(id: $id) {
        id
        tutor{
          id
          fullName
        },
        date
        time
        location
        notes
        subjects{
          name
          level
        }
        attendance {
          isPresent
          student {
            id
            fullName
          }
        }
      }
    }
  `;

  constructor(
    public toastController: ToastController,
    private apollo: Apollo,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.params.subscribe(p => {
      this.sessionId = p.id;
    });
  }

  debug() {
    console.log(this.session.date);
  }

  navigate(id: string) {
    this.router.navigate([`/tutor/${id}`]);
  }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: this.SESSION,
        variables: {
          id: this.sessionId
        }
      })
      .valueChanges.subscribe((result: any) => {
      console.log(result?.data?.session)
      this.session = result?.data?.session;
      this.loading = result.loading;
      this.error = result.error;
    });
  }


  // loadStudents() {
  //   for (let i = 0; i < 5; i++) {
  //     this.students.push('Abbey Edward');
  //   }
  // }

  async handleNoteSubmit() {
    const toast = await this.toastController.create({
      message: 'a note about the session has been saved',
      duration: 2000,
      color: 'success',
      position: 'top',
    });
    toast.present();
  }
}
