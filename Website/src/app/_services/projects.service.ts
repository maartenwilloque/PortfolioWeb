import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { PTag } from '../_models/PTag';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = [
    {
      id: 2,
      name: 'Portfolio Website',
      developers: 'Maarten Willoqué',
      year: 2024,
      summary: 'This project is part of the thesis together with the internship',
      description: 'The website is created using Angular and TypeScript and is hosted on a Microsoft Azure Static Web App. For the storage of the documents, a Blob Storage was set up. This website consists of four parts: <ul><li><strong>Homepage:</strong> Provides information about the content of the website.</li><li><strong>Projects:</strong> Contains some projects created during the course.</li><li><strong>Resume:</strong> Shows information about my acquired skills and career path.</li><li><strong>Internship:</strong> Contains all information about the internship with links to open and download all documents created for the internship.</li></ul>',
      projectLink: '',
      tags: [{ key: 'Angular', color: '#dd1b16', icon: '../../assets/Images/LanguagesFrameworks/angular.svg', type: 'Framework' },
      { key: 'Typescript', color: '#3178c6', icon: '../../assets/Images/LanguagesFrameworks/typescript.svg', type: 'Language' }
      ],
      pictures: ['../../assets/Images/Projects/PortfolioSite/portfolio website home.png', '../../assets/Images/Projects/PortfolioSite/portfolio website resume.png', '../../assets/Images/Projects/PortfolioSite/portfolio website resume mobile.png']

    },
    {
      id: 3,
      name: 'Project 4.0',
      developers: 'Joris Van Puyenbroeck, Peter Henskens, Willem Helsen, Maarten Willoqué',
      year: 2024,
      summary: 'For a customer called Zeron, an AI infused solution for trustees to manage a shared mailbox was created.',
      description: '<p>Together with my three fellow students, we built a solution to help the company Zeron manage shared mailboxes for several offices. The purpose of our solution was to categorize incoming emails. We classified emails based on type, urgency, and sentiment by using an ML.NET model, which we not only trained but also made retrainable in case of errors. This way, it would be retrained for every incoming email. We also made it possible to analyze the attachments of each email to determine what kind of document it was and even to extract keywords that could be matched with information from the database.</p><p>To accomplish this, we used several technologies:</p><ul><li><strong>Microsoft Azure:</strong> Hosted everything using Azure Functions to run the ML.NET models.</li><li><strong>Power Automate:</strong> Handled incoming emails with a flow triggered by new arrivals.</li><li><strong>Microsoft SQL:</strong> Used as a database linked with App Services to handle all API requests.</li><li><strong>Blob Storage:</strong> Stored incoming emails.</li><li><strong>Front End:</strong> Built with a Static Web App using React and TypeScript.</li></ul><p>This project was not created as a final product but more as a proof of concept.</p>',
      projectLink: '',
      tags: [{ key: 'React', color: '#02569b', icon: '../../assets/Images/LanguagesFrameworks/react.svg', type: 'Framework' },
      { key: 'Javascript', color: '#f7df1e', icon: '../../assets/Images/LanguagesFrameworks/javascript.svg', type: 'Language' },
      { key: 'Asp.net', color: '#512bd4', icon: '../../assets/Images/LanguagesFrameworks/net.svg', type: 'Framework' },
      { key: 'Power Platform', color: '#02569b', icon: '../../assets/Images/LanguagesFrameworks/microsoft-power-platform.svg', type: 'Framework' },
      { key: 'Csharp', color: '#239120', icon: '../../assets/Images/LanguagesFrameworks/csharp.svg', type: 'Language' },
      ],
      pictures: ['../../assets/Images/Projects/project40/project40dashboard.png', '../../assets/Images/Projects/project40/project40maillog.png', '../../assets/Images/Projects/project40/project40detail.png', '../../assets/Images/Projects/project40/project40structure.png']

    },
    {
      id: 4,
      name: 'Albumopedia',
      developers: 'Jonas Quintiens, Dries Vandoorne, Maarten Willoqué',
      year: 2023,
      summary: 'Application to scan an album cover, rate it and listen to your favorite song on Spotify',
      description: '<p>For the course <strong>Advanced Programming Topics and Mobile Development</strong>, we created a mobile application using augmented reality (Wikitude) which allowed the user to scan an album cover using their phone. When recognized, information about the album and artist is displayed, as well as an average rating given to the album by other users. The user has the option to rate the album themselves and even listen to the songs on the album due to a link between the application and Spotify. To build this application, we used Flutter as a framework and Dart as the programming language. The application backend was deployed in Okteto.</p>',
      projectLink: '',
      tags: [{ key: 'Flutter', color: '#02569b', icon: '../../assets/Images/LanguagesFrameworks/flutter.svg', type: 'Framework' },
      { key: 'Dart', color: '#00599c', icon: '../../assets/Images/LanguagesFrameworks/dart.svg', type: 'Language' },
      { key: 'Javascript', color: '#f7df1e', icon: '../../assets/Images/LanguagesFrameworks/javascript.svg', type: 'Language' },
      { key: 'Java', color: '#007396', icon: '../../assets/Images/LanguagesFrameworks/java.svg', type: 'Language' }
      ],
      pictures: ['../../assets/Images/Projects/Flutter/flutterdetails.png', '../../assets/Images/Projects/Flutter/flutterreview.png', '../../assets/Images/Projects/Flutter/flutterscan.png']

    },
    {
      id: 5,
      name: 'MyExpense',
      developers: 'Erwin Van Moorleghem, Maarten Willoqué',
      year: 2021,
      summary: 'Developed for employees of Thomas More to easily enter and check their expenses and where managers can approve these expenses',
      description: '<p>This application was created as an assignment for the <strong>PHP Project Course</strong>. The purpose was to create a small application made with PHP using an SQL database and Laravel as framework to allow users to enter their expenses. Depending on user roles, the user can have different tasks:</p><ul><li><strong>Regular users:</strong> Can only enter and check their expenses.</li><li><strong>Managers:</strong> Allowed to view the expenses of their employees and approve or reject them.</li><li><strong>Finance department employees:</strong> Able to process the payment to the employee if the expense is approved.</li></ul>',
      projectLink: '',
      tags: [{ key: 'Php', color: '#777bb4', icon: '../../assets/Images/LanguagesFrameworks/php.svg', type: 'Language' },
      { key: 'Javascript', color: '#f7df1e', icon: '../../assets/Images/LanguagesFrameworks/javascript.svg', type: 'Language' },
      { key: 'C', color: '#00599c', icon: '../../assets/Images/LanguagesFrameworks/c.svg', type: 'Language' },
      { key: 'Laravel', color: '#ff2d20', icon: '../../assets/Images/LanguagesFrameworks/laravel.svg', type: 'Framework' },
      ],
      pictures: ['../../assets/Images/Projects/MyExpense/myExpense.png']

    },
    {
      id: 6,
      name: 'Level Up',
      developers: ' Maarten Willoqué',
      year: 2023,
      summary: 'The purpose of this application is to collect ideas on the production floor of a company.',
      description: '<p>This project started as an assignment for the <strong>Angular Course</strong> but was actually implemented in a production environment at my previous employer. Users can submit ideas on how to improve production. This is not always an improvement in efficiency but also in safety, cost reduction, or overall well-being. Depending on the user profile, users can:</p><ul><li>Submit ideas</li><li>Be part of the execution team</li><li>Be part of the approval team</li></ul><p>Every improvement is tracked from beginning to end so an actual value can be determined. The application is built with Angular and TypeScript. Tailwind CSS was used for structuring the UI. The backend was handled by Next.js. When it went to production, the backend was rebuilt to support an Azure SQL database, as this was already in place.</p>',
      projectLink: '',
      tags: [{ key: 'Angular', color: '#dd1b16', icon: '../../assets/Images/LanguagesFrameworks/angular.svg', type: 'Framework' },
      { key: 'Typescript', color: '#3178c6', icon: '../../assets/Images/LanguagesFrameworks/typescript.svg', type: 'Language' },
      { key: 'Next.js', color: '#000000', icon: '../../assets/Images/LanguagesFrameworks/next-js.svg', type: 'Framework' },
      { key: 'Asp.net', color: '#512bd4', icon: '../../assets/Images/LanguagesFrameworks/net.svg', type: 'Framework' },
      { key: 'Csharp', color: '#239120', icon: '../../assets/Images/LanguagesFrameworks/csharp.svg', type: 'Language' },
      ],
      pictures: ['../../assets/Images/Projects/LevelUp/LevelUpLogo2Trans.png']

    },
    {
      id: 7,
      name: 'MyContracts',
      developers: ' Maarten Willoqué',
      year: 2024,
      summary: 'Automated processes of contract addendum requests',
      description: '<p>This project is a bit of an outlier compared with the other projects in the portfolio as it is not an application developed for a course but during my job as a consultant. This application was built for a company to handle the flow of requested contract addendums, such as structural telework and overtime. The requests can be made by every employee, but using groups, not everyone can request any addendum. These requests have to be approved by the manager and signed by both the manager and the requestor. After digitally signing, a final document is created and added to the employee s contract. A portal was created for all users, and depending on the role (user, manager, or HR), additional screens are available to manage the requests.</p><p>To set up this process, I used the Microsoft Power Platform with a Microsoft Power App for the front end and Power Automate flows handling the backend. All data is stored in Dataverse tables.</p>',
      projectLink: '',
      tags: [{ key: 'Power Platform', color: '#02569b', icon: '../../assets/Images/LanguagesFrameworks/microsoft-power-platform.svg', type: 'Framework' },
      { key: 'PowerApps', color: '#02569b', icon: '../../assets/Images/LanguagesFrameworks/Microsoft_Power_Apps_(2020).svg', type: 'Framework' },
      ],
      pictures: ['../../assets/Images/Projects/MyContracts/MyContractsPortal.png', '../../assets/Images/Projects/MyContracts/MyContractsManager.png', '../../assets/Images/Projects/MyContracts/MyContractsHR.png']
    }
  ]

  constructor() { }
  getProjects(): Observable<Project[]> {

    return of(this.projects)
  }

  getProjectById(id: number): Observable<Project | undefined> {
    const project = this.projects.find(project => project.id === id);
    return of(project);
  }


  getPTags(): Observable<PTag[]> {
    const PTags: PTag[] = [
      { key: 'Javascript', color: '#f7df1e', icon: '../../assets/Images/LanguagesFrameworks/javascript.svg', type: 'Language' },
      { key: 'Typescript', color: '#3178c6', icon: '../../assets/Images/LanguagesFrameworks/typescript.svg', type: 'Language' },
      { key: 'Python', color: '#3776ab', icon: '../../assets/Images/LanguagesFrameworks/python.svg', type: 'Language' },
      { key: 'Java', color: '#007396', icon: '../../assets/Images/LanguagesFrameworks/java.svg', type: 'Language' },
      { key: 'Csharp', color: '#239120', icon: '../../assets/Images/LanguagesFrameworks/csharp.svg', type: 'Language' },
      { key: 'Php', color: '#777bb4', icon: '../../assets/Images/LanguagesFrameworks/php.svg', type: 'Language' },
      { key: 'C', color: '#00599c', icon: '../../assets/Images/LanguagesFrameworks/c.svg', type: 'Language' },
      { key: 'Dart', color: '#00599c', icon: '../../assets/Images/LanguagesFrameworks/dart.svg', type: 'Language' },
      { key: 'Angular', color: '#dd1b16', icon: '../../assets/Images/LanguagesFrameworks/angular.svg', type: 'Framework' },
      { key: 'Spring', color: '#6db33f', icon: '../../assets/Images/LanguagesFrameworks/spring.svg', type: 'Framework' },
      { key: 'Laravel', color: '#ff2d20', icon: '../../assets/Images/LanguagesFrameworks/laravel.svg', type: 'Framework' },
      { key: 'Asp.net', color: '#512bd4', icon: '../../assets/Images/LanguagesFrameworks/net.svg', type: 'Framework' },
      { key: 'Node.js', color: '#339933', icon: '../../assets/Images/LanguagesFrameworks/nodejs.svg', type: 'Framework' },
      { key: 'Next.js', color: '#000000', icon: '../../assets/Images/LanguagesFrameworks/next-js.svg', type: 'Framework' },
      { key: 'Flutter', color: '#02569b', icon: '../../assets/Images/LanguagesFrameworks/flutter.svg', type: 'Framework' },
      { key: 'React', color: '#02569b', icon: '../../assets/Images/LanguagesFrameworks/react.svg', type: 'Framework' },
      { key: 'Power Platform', color: '#02569b', icon: '../../assets/Images/LanguagesFrameworks/microsoft-power-platform.svg', type: 'Framework' },
      { key: 'PowerApps', color: '#02569b', icon: '../../assets/Images/LanguagesFrameworks/Microsoft_Power_Apps_(2020).svg', type: 'Framework' },
    ];
    return of(PTags)
  }
}
