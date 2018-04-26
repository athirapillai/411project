import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../imageservice.service';
import { Auth } from 'aws-amplify';


declare var $: any;

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.css'],
  providers: [ImageService],
})
export class PhotoViewComponent implements OnInit {

  @Input() data;
  public favorited = false;
  @Input() showFavorite;

  constructor(private imageservice: ImageService) { }

  ngOnInit() {
    $(document).ready(() => {
        $('.materialboxed').materialbox();
//        let $this = this;
//        $('.unfavorited').click(async function() {
//          $(this).siblings('.favorited').show(500);
//          $(this).hide(500);
//
//          // make favorite request
//        let user = await Auth.currentAuthenticatedUser();
//        $this.imageservice.favoriteImage(user.username, $this.data.id)
//        .subscribe(data => { console.log(data) }
//        , error => {
//          console.error(error);
//        });
//
//
//        });
      });
  }

  getCaption() {
    return `${this.data.caption} | ${this.data.location}`;
  }

  async favoriteclicked() {
    let user = await Auth.currentAuthenticatedUser();
            this.imageservice.favoriteImage(user.username, this.data.id)
            .subscribe(data => { console.log(data);
              this.favorited = true;
            }

            , error => {
              console.error(error);
            });
  }

}
