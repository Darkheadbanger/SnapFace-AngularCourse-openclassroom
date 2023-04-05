import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import {SingleFaceSnapComponentComponent} from "./single-face-snap-component/single-face-snap-component.component";

// App component va servir uniquement aux élements structuraux principaux

const routes: Routes = [{
  path: "faceSnaps/:id", component: SingleFaceSnapComponentComponent,
},{
  path: "faceSnaps", component: FaceSnapListComponent,
},{
  path: "", component: LandingPageComponentComponent
}]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule, //Exporter le roer module configué, comme ca il suffit pour configuer le routeur
  ]
})
export class AppRoutingModule { }
