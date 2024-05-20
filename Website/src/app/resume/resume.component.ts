import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Language } from '../_models/Language';
import { LanguageService } from '../_services/language.service';
import { EducationService } from '../_services/education.service';
import { Education } from '../_models/Education';
import { Knowledge } from '../_models/Knowledge';
import { KnowledgeService } from '../_services/knowledge.service';
import { Experience } from '../_models/Experience';
import { ExperienceService } from '../_services/experience.service';
import { PTag } from '../_models/PTag';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  languages = {} as Language[]
  educations = {} as Education[]
  knowledges = {} as Knowledge[]
  experiences = {} as Experience[]
  visibleSections: { [key: string]: boolean } = {
    contact: false,
    languages: false,
    education: false,
    knowledge: false,
    experience: false
  };

  constructor(private titleService: Title, private languageService: LanguageService, private educationService: EducationService, private knowledgeService: KnowledgeService, private experienceService: ExperienceService) {
    this.titleService.setTitle('Resume');
  }
  ngOnInit(): void {
    this.languageService.getLanguages().subscribe(language => {
      this.languages = language
    })
    this.educationService.getEducations().subscribe(educations => {
      this.educations = educations
    })
    this.knowledgeService.getKnowledges().subscribe(knowledge => {
      this.knowledges = knowledge
    })
    this.experienceService.getExperiences().subscribe(experiences => {
      this.experiences = experiences
    })

    if (window.innerWidth > 768) {
      this.visibleSections = {
        contact: true,
        languages: true,
        education: true,
        knowledge: true,
        experience: true
      };
    }

  }

  toggleSection(section: string): void {
    this.visibleSections[section] = !this.visibleSections[section];
  }

  isSectionVisible(section: string): boolean {
    return this.visibleSections[section];
  }

  getStars(score: number): string {

    return this.languageService.getStars(score)

  }

}
