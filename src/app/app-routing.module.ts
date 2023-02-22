import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';

const routes: Routes = [{
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
    RouterModule,
  ]
})
export class AppRoutingModule { }
