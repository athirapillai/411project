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
import { ForestsComponent } from './forests/forests.component';
import { MountainsComponent } from './mountains/mountains.component';
import { WaterComponent } from './water/water.component';
import { LandmarksComponent } from './landmarks/landmarks.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PhotoViewComponent } from './photo-view/photo-view.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
 { path: 'sunsets', component: SunsetsComponent },
 { path: 'forests', component: ForestsComponent },
 { path: 'mountains', component: MountainsComponent },
 { path: 'water', component: WaterComponent },
 { path: 'landmarks', component: LandmarksComponent },
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
    ForestsComponent,
    MountainsComponent,
    WaterComponent,
    LandmarksComponent,
    FavoritesComponent,
    PhotoViewComponent,
    LoginComponent,
    SignupComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
