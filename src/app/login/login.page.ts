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
    mutation login($input: LoginInput!) {
      login(input: $input) {
        user {
          id
        }
      }
    }
  `;

  user: any[];
  loading = true;
  error: any;

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
    let msg = '';

    this.apollo
      .mutate({
        mutation: this.LOGIN,
        variables: {
          input: {
            email: this.email,
            password: this.password,
          },
        },
      })
      .subscribe(
        ({ data }) => {
          console.log('got data', data);
        },
        (error) => {
          console.log('there was an error sending the query', error);
        }
      );

    console.log(this.user);
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

    if (this.isLoggedIn) {
      this.router.navigate(['/upcoming-sessions']);
    }
  }
}
