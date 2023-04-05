import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsServiceService } from '../services/face-snaps-service.service';
import { Router } from '@angular/router';

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
  // Injection du service
  constructor(
    private faceSnapServiceService: FaceSnapsServiceService,
    private router: Router
  ) {}

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapServiceService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapServiceService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`faceSnaps/${this.faceSnap.id}`);
  }
}
