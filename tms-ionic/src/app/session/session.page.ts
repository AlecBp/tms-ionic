import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {
  tutor: string;
  students: string[];

  constructor(public toastController: ToastController) {
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

  async handleNoteSubmit() {
    const toast = await this.toastController.create({
      message: 'a note about the session has been saved',
      duration: 2000,
      color: "success",
      position: "top"
    });
    toast.present();
  }

}
