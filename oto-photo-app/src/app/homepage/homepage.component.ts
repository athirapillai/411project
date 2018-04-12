import { Component, OnInit, Inject } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FileUploadModel} from '../file-upload-model';
import { ImageService } from '../imageservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ImageService],
})
export class HomepageComponent implements OnInit {

   public fileUploadModel: FileUploadModel;

   constructor(private router:Router, public dialog: MatDialog, private imageservice: ImageService) {

    this.fileUploadModel = new FileUploadModel();
   }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      height: '500px',
      data: this.fileUploadModel,
    });

    dialogRef.afterClosed().subscribe(async (result: FileUploadModel) => {
      console.log('The dialog was closed');
      let user = await Auth.currentAuthenticatedUser();
      result.ownerId = user.username;
      this.imageservice.uploadImage(result)
        .subscribe((result) => {
          console.log(result);
          switch (result.imageAlbum) {
            case "sunrises sunsets":
              this.router.navigate(['/sunsets']);
              break;


          }
        }, (error) => {
          console.error(error);
        });

    });
  }

    ngOnInit() {
    }

    logout() {
    Auth.signOut()
        .then(data => this.router.navigate(['/login']))
        .catch(err => console.log(err));

    }


}

@Component({
  selector: 'uploadfile-dialog',
  templateUrl: 'uploadfile-dialog.html',
  styleUrls: ['./uploadfile-dialog.css'],
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  fileAdded(event) {
    this.data.file = event.target.files[0];
  }

}
