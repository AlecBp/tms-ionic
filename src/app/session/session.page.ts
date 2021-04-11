import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {
  tutor: string;
  students: string[];

  sessions: any[];
  loading = true;
  error: any;

  constructor(public toastController: ToastController, private apollo: Apollo) {
    this.tutor = 'John Doe';
    this.students = [];
    this.loadStudents();
  }

  ngOnInit() {
    // this.apollo
    //   .watchQuery({
    //     query: gql`
    //       {
    //         session(id: ) {
    //           id
    //           subjects {
    //             name
    //             level
    //           }
    //         }
    //       }
    //     `,
    //   })
    //   .valueChanges.subscribe((result: any) => {
    //     this.sessions = result?.data?.sessions;
    //     this.loading = result.loading;
    //     this.error = result.error;
    //   });
  }

  debug() {
    console.log(this.sessions);
  }

  loadStudents() {
    for (let i = 0; i < 5; i++) {
      this.students.push('Abbey Edward');
    }
  }

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
