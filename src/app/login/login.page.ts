import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string;
  password: string;
  isLoggedIn: boolean;

  LOGIN = gql`
    mutation login($loginInput: LoginInput!) {
      login(loginInput: $loginInput)
    }
  `;



  constructor(
    public toastController: ToastController,
    private router: Router,
    private apollo: Apollo
  ) {
    this.email = '';
    this.password = '';
    this.isLoggedIn = false;
  }

  async handleLogIn() {
    let toast: any = '';

    await this.apollo
      .mutate({
        mutation: this.LOGIN,
        variables: {
          loginInput: {
            email: this.email,
            password: this.password,
          },
        },
      })
      .subscribe(
        ({ data }) => {
          this.router.navigate(['/upcoming-sessions']);
          // toast = this.toastController.create({
          //   message: 'Successfully Logged in',
          //   duration: 2000,
          //   color: this.isLoggedIn ? 'success' : 'danger',
          //   position: 'top',
          // });
          // toast.present();
        },
        (error) => {
          // toast = this.toastController.create({
          //   message: 'LogIn failed',
          //   duration: 2000,
          //   color: this.isLoggedIn ? 'success' : 'danger',
          //   position: 'top',
          // });
          // toast.present();
        }
      );
  }
}
