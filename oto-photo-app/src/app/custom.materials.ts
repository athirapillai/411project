import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [MatGridListModule, MatInputModule, MatFormFieldModule],
  exports: [MatGridListModule, MatInputModule, MatFormFieldModule],
})
export class CustomMaterialModule {
}
