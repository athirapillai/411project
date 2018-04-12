import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  imports: [MatGridListModule, MatInputModule, MatFormFieldModule, MatDialogModule],
  exports: [MatGridListModule, MatInputModule, MatFormFieldModule, MatDialogModule],
})
export class CustomMaterialModule {
}
