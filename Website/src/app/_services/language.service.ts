import { Injectable } from '@angular/core';
import { Language } from '../_models/Language';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  getLanguages(): Observable<Language[]>{

    const languages: Language[] = [
      { id: 1, name: 'Dutch', score: 5 },
      { id: 2, name: 'English', score: 4 },
      { id: 3, name: 'French', score: 3 }
    ]
    return of(languages)
  }

  getStars(score: number): string {
    const filledStars = '<i class="fa fa-star"></i>'.repeat(score);
    const emptyStars = '<i class="fa fa-star-o"></i>'.repeat(5 - score);
    return filledStars + emptyStars;

  }

}
