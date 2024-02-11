import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {




  

  projects: Project[] = [{
    id: 0,
    name: 'Ample App Angular',
    summary: 'Test Description',
    description: '',
    projectLink: '',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    pictures: []

  },
  {
    id: 1,
    name: 'Ample App Angular 2',
    summary: 'Test Description',
    description: '',
    projectLink: '',
    tags: [Tag.ANGULAR, Tag.PYTHON],
    pictures: []

  }];
  constructor() { }


  getProjects() {
    return this.projects;
  }

  getProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id:' + id);

    }

    return project;
  }

  getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false
        }
      });
      if (foundAll) {
        filteredProjects.push(project);
      }
    }
    );
    return filteredProjects;
  }
}
