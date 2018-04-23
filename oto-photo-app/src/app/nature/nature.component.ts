import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { ImageService } from '../imageservice.service';
import { FileUploadModel } from '../file-upload-model';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css'],
  providers: [ImageService],
})
export class NatureComponent implements OnInit {
public files: any[];

 constructor(private router:Router, private imageservice: ImageService) {

   }

   ngOnInit() {
    this.imageservice.getImagesByAlbum('nature landscape')
      .subscribe((data) => {
        this.files = data;
      }, (error) => {
        console.error(error);
      });
   }

   logout() {
   Auth.signOut()
       .then(data => this.router.navigate(['/login']))
       .catch(err => console.log(err));

   }
}
