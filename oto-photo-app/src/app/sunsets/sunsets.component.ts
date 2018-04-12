import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sunsets',
  templateUrl: './sunsets.component.html',
  styleUrls: ['./sunsets.component.css'],
})
export class SunsetsComponent implements OnInit {

 constructor(private router:Router) {

   }

   ngOnInit() {
   }

   logout() {
   Auth.signOut()
       .then(data => this.router.navigate(['/login']))
       .catch(err => console.log(err));

   }
}
