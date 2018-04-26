import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  imports: [MatGridListModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatStepperModule, MatIconModule],
  exports: [MatGridListModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatStepperModule, MatIconModule],
})
export class CustomMaterialModule {
}
