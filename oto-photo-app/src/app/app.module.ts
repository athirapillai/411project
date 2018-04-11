import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CustomMaterialModule} from './custom.materials';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);



import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SunsetsComponent } from './sunsets/sunsets.component';
import { NatureComponent } from './nature/nature.component';
import { FoodComponent } from './food/food.component';
import { AnimalsComponent } from './animals/animals.component';
import { ArtComponent } from './art/art.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PhotoViewComponent } from './photo-view/photo-view.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';

const appRoutes: Routes = [
 { path: 'sunsets', component: SunsetsComponent },
 { path: 'nature', component: NatureComponent },
 { path: 'food', component: FoodComponent },
 { path: 'animals', component: AnimalsComponent },
 { path: 'art', component: ArtComponent },
 { path: 'favorites', component: FavoritesComponent },
 { path: 'signup', component: SignupComponent },
 { path: 'home', component: HomepageComponent },
 { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SunsetsComponent,
    NatureComponent,
    FoodComponent,
    AnimalsComponent,
    ArtComponent,
    FavoritesComponent,
    PhotoViewComponent,
    LoginComponent,
    SignupComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
          appRoutes,
          { enableTracing: true }
          ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
