import { Injectable } from '@angular/core';
import { Education } from '../_models/Education';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class EducationService {

  constructor(private http: HttpClient) { }

  getEducations(): Observable<Education[]> {

    return this.http.get<Education[]>(`https://apiportfolio.azurewebsites.net/api/education`);

  }
}


