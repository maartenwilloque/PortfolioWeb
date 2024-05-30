import { Injectable } from '@angular/core';
import { Experience } from '../_models/Experience';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

   constructor(private http: HttpClient) { }

  getExperiences(): Observable<Experience[]>{
    return this.http.get<Experience[]>(`https://apiportfolio.azurewebsites.net/api/experience`);

  }
}
