import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { ImageService } from '../imageservice.service';
import { FileUploadModel } from '../file-upload-model';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  providers: [ImageService],
})
export class AnimalsComponent implements OnInit {
 public files: any[];

 constructor(private router:Router, private imageservice: ImageService) {

   }

   ngOnInit() {
    this.imageservice.getImagesByAlbum('pets animals')
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
