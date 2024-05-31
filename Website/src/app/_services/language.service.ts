import { Injectable } from '@angular/core';
import { Language } from '../_models/Language';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<Language[]>{

    return this.http.get<Language[]>(`https://apiportfolio.azurewebsites.net/api/language`);

  }

  getStars(score: number): string {
    const filledStars = '<i class="fa fa-star"></i>'.repeat(score);
    const emptyStars = '<i class="fa fa-star-o"></i>'.repeat(5 - score);
    return filledStars + emptyStars;

  }

}
