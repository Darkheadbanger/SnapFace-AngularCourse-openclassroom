import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsServiceService } from '../services/face-snaps-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-face-snap-detail',
  templateUrl: './single-face-snap-component.component.html',
  styleUrls: ['./single-face-snap-component.component.scss'],
})
export class SingleFaceSnapComponentComponent implements OnInit {
  //@Input() faceSnap!: FaceSnap; // Injection du model
  faceSnap!: FaceSnap | null;
  snapped!: boolean;
  ohSnap!: string;
  ooopsSnap!: string;
  buttonText!: string;

  constructor(
    private faceSnapServiceService: FaceSnapsServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.snapped = true;
    this.ohSnap = 'Oh Snap!';
    this.buttonText = 'Oh Snap!';
    this.ooopsSnap = 'Oops, un Snap!';

    const faceSnapId: number = +this.route.snapshot.params['id'];

    this.faceSnap = this.faceSnapServiceService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.faceSnap !== null) {
      if (this.buttonText === 'Oh Snap!') {
        this.faceSnapServiceService.snapFaceSnapById(this.faceSnap.id, 'snap');
        this.buttonText = 'Oops, unSnap!';
      } else {
        this.faceSnapServiceService.snapFaceSnapById(
          this.faceSnap.id,
          'unsnap'
        );
        this.buttonText = 'Oh Snap!';
      }
    }
  }
}
