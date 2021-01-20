import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private contents = [
    {
      header: 'Professional Experience',
      content: [
        '5 years of Java experience and Object Oriented Design, 2 years in professional environment',
        '3 years of C development in personal and scholastic pursuits',
        '3 years SQL experience, 2  years professional and some T-SQL',
        '2 years of RESTful API development, maintenance and implementation',
        '2 years with RegEx and parsing user input',
        '2 years developing in the GWT Framework',
        '2 years of experience in the Web Development Life Cycle and Agile workflow',
        '2 years of experience with HTML, UiBinder, and MVP concepts',
        '2 years of professional source control and workflow tools including Git, Subversion, Stack, Crucible, Jira, Confluence'
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
        'Steve Kautz, ISU Computer Science Professor and Mentor – (515) 294-4183',
        'Bronson Mayse, NISC Software Specialist and Coworker – (319) 855-0513'
      ]
    }
  ];

  constructor() {}
}
