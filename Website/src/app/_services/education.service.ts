import { Injectable } from '@angular/core';
import { Education } from '../_models/Education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  Educations: Education[] = [
    { id: 1, name: 'Lean Six Sigma Green Belt', institute: 'The Six Sigma Company' },
    { id: 2, name: 'Project Management', institute: 'International Institute for Learning' },
    { id: 3, name: 'Bachelor Toegepaste Informatica', institute: 'Thomas More' },
    { id: 4, name: 'Microsoft Power Platform App Maker', institute: 'Microsoft' },
    { id: 5, name: 'Extend Microsoft 365 – Fundamental', institute: 'Microsoft' },
    { id: 6, name: 'Automate a business process using Power Automate', institute: 'Microsoft' },
    { id: 7, name: 'European Collaboration Summit 2023', institute: 'Microsoft' }
  ];

  constructor() { }

  getEducations() {
    return this.Educations
  }
}


