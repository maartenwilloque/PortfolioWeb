import { Injectable } from '@angular/core';
import { Knowledge } from '../_models/Knowledge';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {

  constructor(private http: HttpClient) { }

  getKnowledges(): Observable<Knowledge[]> {

    return this.http.get<Knowledge[]>(`https://apiportfolio.azurewebsites.net/api/knowledge`);

  }
}
