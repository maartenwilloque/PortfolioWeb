import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 10000, noPause: false, showIndicators: true } }
 ],
})
export class ProjectModalComponent {
  project = {} as Project;

  noWrapSlides = false;
  showIndicator = true;

  constructor( public bsModalRef: BsModalRef){

  }

  close(): void {
    this.bsModalRef.hide()
  }

}
