import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [Router],
})
export class SignupComponent implements OnInit {

  public email:string;
  public password:string;
  public confirmpassword:string;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  signUpEmail() {
   console.log(this.email);

   if (this.email != "" && this.password != "" && this.confirmpassword != "" && this.password == this.confirmpassword) {
      Auth.signUp(this.email, this.password, null, null)
        .then((result) => {
          console.log(result);
          this.router.navigate(['/login']);
        })
        .catch((err) => console.error(err));
   }
  }
}

