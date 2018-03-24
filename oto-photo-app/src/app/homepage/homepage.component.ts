import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() {
    Auth.signIn("test@email.com", "password")
      .then((user) => {
      console.log(user)
      })
      .catch((error) => console.error(error));
  }

  ngOnInit() {
  }

}
