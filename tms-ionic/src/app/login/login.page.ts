import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  isLoggedIn: boolean;

  constructor(public toastController: ToastController, private router: Router) {
    this.email = '';
    this.password = '';
    this.isLoggedIn = false;
  }

  ngOnInit() {}

  async handleLogIn() {
    let msg = '';
    console.log("!!!", this.email, this.password);
    if (this.email === 'johnDoe@gmail.com' && this.password === 'password') {
      msg = 'Successfully Logged in';
      this.isLoggedIn = true;
    } else {
      msg = 'LogIn failed';
    }

    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: this.isLoggedIn ? 'success' : 'danger',
      position: 'top',
    });

    toast.present();
    
    if(this.isLoggedIn) {
      this.router.navigate(['/upcoming-sessions'])
    }
  }
}
