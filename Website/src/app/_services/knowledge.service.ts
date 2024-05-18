import { Injectable } from '@angular/core';
import { Knowledge } from '../_models/Knowledge';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {

  Knowledges: Knowledge[] = [
    { id: 1, name: 'Microsoft 365', description: 'SharePoint, Teams, Stream, Excel, PowerPoint, Planner' },
    { id: 2, name: 'Power Platform', description: 'Dataverse, Power Automate, Power Apps (canvas & model driven), AI Builder, Power Apps Portal' },
    { id: 3, name: 'Programming', description: 'HTML, CSS, JS, PHP, Angular, React, SQL, Java, C#' },
    { id: 4, name: 'Skills', description: 'Lean Six Sigma Green Belt, Continuous Improvement, project management' }
  ];

  constructor() { }

  getKnowledges() {
    return this.Knowledges
  }
}
