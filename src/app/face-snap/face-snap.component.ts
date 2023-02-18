import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap; // Injection du model
  snapped!: boolean;
  ohSnap!: string;
  ooopsSnap!: string;
  buttonText!: string;
  ngOnInit() {
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
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
