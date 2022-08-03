import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = '/assets/img1.jpg';
  image2 = '/assets/img2.jpg';
  image3 = '/assets/img3.jpg';

  constructor() { }

  ngOnInit() {
  }

}