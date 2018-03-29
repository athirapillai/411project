import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string;
  public password:string;

  constructor() { }

  ngOnInit() {
  }

  signInEmail() {
  console.log(this.email);
  Auth.signIn(this.email, this.password)
          .then((user) => {
          console.log(user)
          })
          .catch((error) => console.error(error));

  }


}
