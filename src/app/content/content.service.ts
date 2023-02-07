import {Injectable} from '@angular/core';
import {SectionContentsModel} from './model/section-contents.model';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private contents: SectionContentsModel[] = [
    {
      header: 'Professional Experience',
      content: [
        '6 years of Java experience and Object Oriented Design, 3 years in professional environment',
        '3 years of C development in personal and scholastic pursuits',
        '4 years SQL experience, 3 years professional and some T-SQL',
        '4 years of RESTful API development, maintenance and implementation',
        '4 years with RegEx and parsing user input',
        '2 years developing in the GWT Framework',
        '2 years of experience in the Web Development Life Cycle and Agile workflow',
        '3 years of experience with HTML, and MVP/MVC concepts',
        '5 years of professional source control and workflow tools including Git, Subversion, Stack, Crucible, Jira, Confluence'
      ]
    },
    {
      header: 'Additional Skills',
      content: [
        'Angular, Spring, .NET, Micro Services',
        'C#, PHP, AJAX, jQuery',
        'Dependency Injection (Guice), SOAP',
        'Intellij, Datagrip, Microsoft SQL Server, Eclipse, VS Code, Visual Studio, Postman'
      ]
    },
    {
      header: 'Education',
      content: [
        'Iowa State University',
        'Bachelor of Science in Computer Engineering, May 2018'
      ]
    },
    {
      header: 'References',
      content: [
        'Jacob Bushlack, J&P Cycles Coworker & Mentee - linkedin.com/in/jakebushlack/',
        'Ed Merriman, J&P Cycles/Revzilla Coworker & Mentor – ed@emerriman.com'
      ]
    }
  ];

  constructor() {}

  getContents(): SectionContentsModel[] {
    return this.contents;
  }
}
