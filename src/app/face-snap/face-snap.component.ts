import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snapped!: boolean;
  ohSnap!: string;
  ooopsSnap!: string;
  buttonText!: string;
  ngOnInit() {
    this.title = 'David';
    this.description = 'Mon meilleur ami depuis tout petit';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl =
      'https://cdn.shopify.com/s/files/1/0266/5817/7121/products/product-image-1251090939.jpg?v=1581492711';
    this.snapped = true;
    this.ohSnap = 'Oh Snap!';
    this.buttonText = 'Oh Snap!';
    this.ooopsSnap = 'Oops, un Snap!';
  }

  onSnap() {
    // if (this.snapped) {
    //   this.snaps++;
    //   this.ohSnap;
    // } else {
    //   this.snaps--;
    //   this.ooopsSnap;
    // }
    // this.snapped = !this.snapped;

    if (this.buttonText === 'Oh Snap!') {
      this.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
