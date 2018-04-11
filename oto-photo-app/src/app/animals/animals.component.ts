import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  providers: [Router],
})
export class AnimalsComponent implements OnInit {

  constructor(private router:Router) {

    }

    ngOnInit() {
    }

    logout() {
    Auth.signOut()
        .then(data => this.router.navigate(['/login']))
        .catch(err => console.log(err));

    }
}
