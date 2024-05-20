import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { PTag } from '../_models/PTag';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = [{
    id: 0,
    name: 'Ample App Angular',
    summary: 'Test Description',
    description: '',
    projectLink: '',
    tags: [{ key: 'angular', color: '#dd1b16', icon: '../../assets/Images/angular.svg', type: 'Framework' },
    { key: 'typescript', color: '#3178c6', icon: '../../assets/Images/typescript.svg', type: 'Language' }
    ],
    pictures: []

  },
  {
    id: 1,
    name: 'Ample App Angular 2',
    summary: 'Test Description',
    description: '',
    projectLink: '',
    tags: [{ key: 'python', color: '#3776ab', icon: '../../assets/Images/python.svg', type: 'Language' }],
    pictures: []

  }]

  constructor() { }
  getProjects(): Observable<Project[]> {

    return of(this.projects)
  }

  getProjectById(id: number): Observable<Project | undefined> {
    const project = this.projects.find(project => project.id === id);
    return of(project);
  }


  getPTags(): Observable<PTag[]>{
    const PTags: PTag[] = [
      { key: 'javascript', color: '#f7df1e', icon: '../../assets/Images/javascript.svg', type: 'Language' },
      { key: 'typescript', color: '#3178c6', icon: '../../assets/Images/typescript.svg', type: 'Language' },
      { key: 'python', color: '#3776ab', icon: '../../assets/Images/python.svg', type: 'Language' },
      { key: 'java', color: '#007396', icon: '../../assets/Images/java.svg', type: 'Language' },
      { key: 'csharp', color: '#239120', icon: '../../assets/Images/csharp.svg', type: 'Language' },
      { key: 'php', color: '#777bb4', icon: '../../assets/Images/php.svg', type: 'Language' },
      { key: 'c++', color: '#00599c', icon: '../../assets/Images/c.svg', type: 'Language' },
      { key: 'angular', color: '#dd1b16', icon: '../../assets/Images/angular.svg', type: 'Framework' },
      { key: 'vue', color: '#42b883', icon: '../../assets/Images/vue.svg', type: 'Framework' },
      { key: 'spring', color: '#6db33f', icon: '../../assets/Images/spring.svg', type: 'Framework' },
      { key: 'laravel', color: '#ff2d20', icon: '../../assets/Images/laravel.svg', type: 'Framework' },
      { key: 'asp.net', color: '#512bd4', icon: 'aspnet-icon', type: 'Framework' },
      { key: 'node.js', color: '#339933', icon: 'nodejs-icon', type: 'Framework' },
      { key: 'next.js', color: '#000000', icon: 'nextjs-icon', type: 'Framework' },
      { key: 'flutter', color: '#02569b', icon: 'flutter-icon', type: 'Framework' },
  ];
    return of(PTags)
  }
}
