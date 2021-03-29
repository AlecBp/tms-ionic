import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  
  constructor(public toastController: ToastController) {
    this.email = "";
    this.password = "";
  }

  ngOnInit() {
  }

  async handleLogIn() {
    const toast = await this.toastController.create({
      message: 'Successfully Logged in',
      duration: 2000,
      color: "success",
      position: "top"
    });
    toast.present();
  }

}
