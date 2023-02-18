import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.models";
import { FaceSnapsServiceService } from '../services/face-snaps-service.service';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnapsLocal!: FaceSnap[];
  constructor(private faceSnapsServiceService: FaceSnapsServiceService) {};

  ngOnInit(): void {
    // this.faceSnapsLocal = this.faceSnapsServiceService.faceSnaps;
    this.faceSnapsLocal = this.faceSnapsServiceService.getAllFaceSnap();
  }

}
