import { Component, OnInit } from '@angular/core';
// import { FaceSnap } from './models/face-snap.models';
import { filter, interval, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Tous ce qui est de format Observable, le nom de la variable finit par $
  // Pour voir directement quel variable ou constant qui est observable
  // On déclare interval$ en tant qu'une propriété de type Observable qui emet de nombre
  interval$!: Observable<string>;
  // interval$!: Observable<number>;

  // redTrainsCalled = 0;
  // blueTrainsCalled = 0;

  ngOnInit() {
    // Pour ajouter des operateurs a des Observable, on utilise la méthode 'tuyau' ou pipe
    // this.interval$ = interval(1000).pipe(map((value) => value * 10));
    this.interval$ = interval(1000).pipe(
      filter((value) => value % 3 === 0),
      map((value) =>
        value % 2 === 0 ? `Je suis ${value} paire` : `Je suis ${value} impaire`
      ),
      tap((text) => this.logger(text))
    );
    // interval$.subscribe((value) => console.log(value));
    // Ca va commencer tout simlpement 3 seconds après et ensuite chaque second
    // interval(500)
    // .pipe(
    //   take(10),
    //   map((value) => (value % 2 === 0 ? 'rouge' : 'blue')),
    //   tap((color) =>
    //     console.log(
    //       `La lumière s'allume en %c${color}`,
    //       `color: ${this.translateColor(color)}`
    //     )
    //   ),
    //   switchMap((color) => this.getTrainObservable$(color)),
    //   tap((train) =>
    //     console.log(
    //       `Train %c${train.color} ${train.trainIndex} arrivé !`,
    //       `font-weight: bold; color: ${this.translateColor(train.color)}`
    //     )
    //   )
    // )
    // .subscribe();
  }
  // On a souvent a des cas de figure ou on a besoin de reagir aux émissions d'un obseravles sans y toucher: reaction side-effect (effet secondaire)
  // Car l'émission de l'obserable a un éffet qui sort de l'observable (qui modifie pas de l'émission) mais qui a un effet secondaires qui sort de l'Obseravable
  // On utilise l'opérateur tap
  logger(text: string): void {
    console.log(`Log: ${text}`);
  }

  // getTrainObservable$(color: 'rouge' | 'blue') {
  //   const isRedTrain = color === 'rouge';
  //   isRedTrain ? this.redTrainsCalled++ : this.blueTrainsCalled++;
  //   const trainIndex = isRedTrain
  //     ? this.redTrainsCalled
  //     : this.blueTrainsCalled;
  //   console.log(
  //     `Train %c${color} ${trainIndex} appelé !`,
  //     `text-decoration: underline; color: ${this.translateColor(color)}`
  //   );
  //   return of({ color, trainIndex }).pipe(delay(isRedTrain ? 5000 : 6000));
  // }

  // translateColor(color: 'rouge' | 'blue') {
  //   return color === 'rouge' ? 'red' : 'blue';
  // }
}
