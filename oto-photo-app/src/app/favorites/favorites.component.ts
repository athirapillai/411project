import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { ImageService } from '../imageservice.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [ImageService],
})
export class FavoritesComponent implements OnInit {
public files: any[];

  constructor(private router: Router, private imageservice: ImageService) {

  }

 ngOnInit() {
     Auth.currentAuthenticatedUser()
      .then((user) => {
       this.imageservice.getFavorites(user.username)
             .subscribe((data: any[]) => {
               this.files = data.map(d => d.image);
             }, (error) => {
               console.error(error);
             });
      }) .catch((error) => {
          console.error(error);
       })

    }
  logout() {
  Auth.signOut()
      .then(data => this.router.navigate(['/login']))
      .catch(err => console.log(err));

  }

}
