import { Component, TemplateRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent {

  modalRef?: BsModalRef;
  selectedImage!: string;


  constructor(private titleService: Title, private modalService: BsModalService) {
    this.titleService.setTitle('Internship');
  }


  openModal(template: TemplateRef<any>, imageUrl: string) {
    this.selectedImage = imageUrl;
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-xl')
  }
}
