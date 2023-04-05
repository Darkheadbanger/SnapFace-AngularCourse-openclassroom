import { Component, OnInit } from '@angular/core';
// import { FaceSnap } from './models/face-snap.models';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Tous ce qui est de format Observable, le nom de la variable finit par $
  // Pour voir directement quel variable ou constant qui est observable
  // On déclare interval$ en tant qu'une propriété de type Observable qui emet de nombre
  interval$!: Observable<number>;

  ngOnInit() {
    this.interval$ = interval(1000);
    // interval$.subscribe((value) => console.log(value));
    // Ca va commencer tout simlpement 3 seconds après et ensuite chaque second
  }
}
