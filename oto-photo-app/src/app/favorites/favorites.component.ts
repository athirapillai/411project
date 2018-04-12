import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  logout() {
  Auth.signOut()
      .then(data => this.router.navigate(['/login']))
      .catch(err => console.log(err));

  }

}
