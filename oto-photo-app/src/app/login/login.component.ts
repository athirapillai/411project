import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public email:string;
  public password:string;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  signInEmail() {
  console.log(this.email);
  Auth.signIn(this.email, this.password)
          .then((user) => {
            console.log(user);
            this._router.navigate(['/home']);
          })
          .catch((error) => console.error(error));

  }

}
