import {Component, OnInit} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Apollo, gql} from 'apollo-angular';

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
        async ({data}) => {
          this.router.navigate(['/upcoming-sessions']);
          const toast: any = await this.toastController.create({
            message: 'Successfully Logged in',
            duration: 2000,
            color: 'success',
            position: 'top',
          });
          toast.present();
        },
        async (error) => {
          const toast: any = await this.toastController.create({
            message: 'LogIn failed',
            duration: 2000,
            color: 'danger',
            position: 'top',
          });
          toast.present();
        }
      );
  }
}
