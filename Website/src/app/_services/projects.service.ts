import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { PTag } from '../_models/PTag';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }
  getProjects(): Observable<Project[]> {

    return this.http.get<Project[]>(`https://apiportfolio.azurewebsites.net/api/project`);
  }

  getProjectById(id: number): Observable<Project> {

    return this.http.get<Project>(`https://apiportfolio.azurewebsites.net/api/project/`+id)
  }


  getPTags(): Observable<PTag[]> {

    return this.http.get<PTag[]>(`https://apiportfolio.azurewebsites.net/api/ptag`);

  }
}
