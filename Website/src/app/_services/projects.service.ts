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
    developers: 'Maarten Willoqué',
    year: 2022,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    description: '',
    projectLink: '',
    tags: [{ key: 'Angular', color: '#dd1b16', icon: '../../assets/Images/angular.svg', type: 'Framework' },
    { key: 'Typescript', color: '#3178c6', icon: '../../assets/Images/typescript.svg', type: 'Language' }
    ],
    pictures: ['https://loremflickr.com/640/360','https://loremflickr.com/640/360','https://loremflickr.com/640/360']

  },
  {
    id: 1,
    name: 'Ample App Angular 2',
    developers: 'Maarten Willoqué',
    year: 2024,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    description: '',
    projectLink: '',
    tags: [{ key: 'Python', color: '#3776ab', icon: '../../assets/Images/python.svg', type: 'Language' }],
    pictures: ['https://loremflickr.com/640/360','https://loremflickr.com/640/360']

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
      { key: 'Javascript', color: '#f7df1e', icon: '../../assets/Images/javascript.svg', type: 'Language' },
      { key: 'Typescript', color: '#3178c6', icon: '../../assets/Images/typescript.svg', type: 'Language' },
      { key: 'Python', color: '#3776ab', icon: '../../assets/Images/python.svg', type: 'Language' },
      { key: 'Java', color: '#007396', icon: '../../assets/Images/java.svg', type: 'Language' },
      { key: 'Csharp', color: '#239120', icon: '../../assets/Images/csharp.svg', type: 'Language' },
      { key: 'Php', color: '#777bb4', icon: '../../assets/Images/php.svg', type: 'Language' },
      { key: 'C++', color: '#00599c', icon: '../../assets/Images/c.svg', type: 'Language' },
      { key: 'Angular', color: '#dd1b16', icon: '../../assets/Images/angular.svg', type: 'Framework' },
      { key: 'Spring', color: '#6db33f', icon: '../../assets/Images/spring.svg', type: 'Framework' },
      { key: 'Laravel', color: '#ff2d20', icon: '../../assets/Images/laravel.svg', type: 'Framework' },
      { key: 'Asp.net', color: '#512bd4', icon: '../../assets/Images/net.svg', type: 'Framework' },
      { key: 'Node.js', color: '#339933', icon: '../../assets/Images/nodejs.svg', type: 'Framework' },
      { key: 'Next.js', color: '#000000', icon: '../../assets/Images/next-js.svg', type: 'Framework' },
      { key: 'Flutter', color: '#02569b', icon: '../../assets/Images/flutter.svg', type: 'Framework' },
      { key: 'React', color: '#02569b', icon: '../../assets/Images/react.svg', type: 'Framework' },
      { key: 'Power Platform', color: '#02569b', icon: '../../assets/Images/microsoft-power-platform.svg', type: 'Framework' },
      { key: 'PowerApps', color: '#02569b', icon: '../../assets/Images/Microsoft_Power_Apps_(2020).svg', type: 'Framework' },
  ];
    return of(PTags)
  }
}
