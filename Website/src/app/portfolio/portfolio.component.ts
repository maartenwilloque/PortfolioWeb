import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { PTag } from '../_models/PTag';
import { ProjectsService } from '../_services/projects.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectFilterComponent } from '../project-filter/project-filter.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];
  languageTags = {} as PTag[]
  frameworkTags = {} as PTag[]
  filteredProjects: Project[] = [];
  selectedTags: Set<string> = new Set<string>();
  bsModalRef?: BsModalRef;

  isCollapsed: boolean = true;
  filtering: boolean = false
  typescript: boolean = false
  visibleSections: { [key: string]: boolean } = {
    filters: false,
  };

  constructor(private titleService: Title, private projectService: ProjectsService, private modalService: BsModalService) {
    this.titleService.setTitle('Portfolio');
  }
  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = projects;
    });
    this.projectService.getPTags().subscribe(tags => {
      this.frameworkTags = tags.filter(tag => tag.type === "Framework")

      this.languageTags = tags.filter(tag => tag.type === "Language");
    });

  }

  openFilterModal(): void {
    const modalOptions: ModalOptions = {
      class: "bs-modal-sm",
      initialState: {
        languageTags: this.languageTags,
        frameworkTags: this.frameworkTags,
        selectedTags: this.selectedTags,
        projects: this.projects

      }
    };
    this.bsModalRef = this.modalService.show(ProjectFilterComponent, modalOptions);

    this.bsModalRef.content.applyFilters.subscribe((selectedTags: Set<string>) => {
      this.applyFilters(selectedTags);
    });
  }

  applyFilters(selectedTags: Set<string>): void {
    this.selectedTags = selectedTags;
    this.filterProjects();
  }


  onTagChange2(tagId: string): void {
    if (this.selectedTags.has(tagId)) {
      this.selectedTags.delete(tagId);
    } else {
      this.selectedTags.add(tagId);
    }
    this.filterProjects();
  }

  resetSelection(): void {
    this.selectedTags.clear();
    this.filterProjects();
  }


  filterProjects(): void {
    if (this.selectedTags.size === 0) {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project =>
        project.tags.some(tag => this.selectedTags.has(tag.key))
      );
    }
  }

  toggleSection(section: string): void {
    this.visibleSections[section] = !this.visibleSections[section];
  }

  isSectionVisible(section: string): boolean {
    return this.visibleSections[section];
  }

  ResetFilters() {

    this.filtering = false
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }
}

