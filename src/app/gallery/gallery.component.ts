import { Component, OnInit } from '@angular/core';
import {Gallery} from 'angular-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
 

  constructor(private gallery: Gallery) {}

  ngOnInit(): void {
  }

  showGallery(index: number) {
    let prop = {
        images: [
            {path: './assets/images/1.jpg'},
            {path: './assets/images/2.jpg'},
            {path: './assets/images/3.jpg'},
            {path: './assets/images/4.jpg'},
            {path: './assets/images/5.jpg'},
            {path: './assets/images/6.jpg'},
            {path: './assets/images/7.jpg'},
            {path: './assets/images/8.jpg'},
            
        ],
        index
    };
    this.gallery.load(prop);
}
}

