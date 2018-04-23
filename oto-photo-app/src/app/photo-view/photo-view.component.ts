import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.css'],
})
export class PhotoViewComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
        $('.materialboxed').materialbox();
      });
  }

  getCaption() {
    return `${this.data.caption} | ${this.data.location}`;
  }

}
