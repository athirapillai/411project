import { Component, OnInit, Inject } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FileUploadModel} from '../file-upload-model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {

   public fileUploadModel: FileUploadModel;

   constructor(private router:Router, public dialog: MatDialog) {

    this.fileUploadModel = new FileUploadModel();
   }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: this.fileUploadModel,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

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

}
