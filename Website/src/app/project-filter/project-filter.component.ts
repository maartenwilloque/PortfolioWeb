import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PTag } from '../_models/PTag';

@Component({
  selector: 'app-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrls: ['./project-filter.component.css']
})
export class ProjectFilterComponent {

  @Input() languageTags = {} as PTag[]
  @Input() frameworkTags = {} as PTag[]
  @Input() selectedTags: Set<string> = new Set<string>();

  @Output() applyFilters = new EventEmitter<Set<string>>();

  constructor( public bsModalRef: BsModalRef){

  }


  onTagChange2(tagId: string): void {
    if (this.selectedTags.has(tagId)) {
      this.selectedTags.delete(tagId);
    } else {
      this.selectedTags.add(tagId);
    }
  }


  apply(): void {
    this.applyFilters.emit(this.selectedTags);
    this.close()
  }

  close(): void {
    this.bsModalRef.hide()
  }

}
