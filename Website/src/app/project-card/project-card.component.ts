import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project = {} as Project
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {

  }

  OpenProjectModal() {
    const modalOptions: ModalOptions = {
      class: "modal-dialog-scrollable",
      initialState: {
        project: this.project
      }

    };


    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
    if (window.innerWidth < 768) {
      this.bsModalRef.setClass('modal-fullscreen')

    }else {
      this.bsModalRef.setClass('modal-xl')
    }
  }
}
