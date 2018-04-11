import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css'],
  providers: [Router],
})
export class NatureComponent implements OnInit {

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
