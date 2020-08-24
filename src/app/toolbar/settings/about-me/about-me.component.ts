import { Component, OnInit } from '@angular/core';
import {ResumeSectionModel} from './model/resume-section.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  sections: ResumeSectionModel[] = [
    new ResumeSectionModel('Career Objective', [
      'Experienced Software Associate with a demonstrated history of working in the computer software industry. \
       Skilled in Java, SQL, MVC/MVP Frameworks and Full-Stack Development. \
       Eager to pursue new opportunities to further my understanding of application and web development.'
    ]),
    new ResumeSectionModel('Professional Experience', [
      '5 years of Java experience and Object Oriented Design, 2 years in professional environment',
      '3 years of C development in personal and scholastic pursuits',
      '3 years SQL experience, 2  years professional and some T-SQL',
      '2 years of RESTful API development, maintenance and implementation',
      '2 years with RegEx and parsing user input',
      '2 years developing in the GWT Framework',
      '2 years of experience in the Web Development Life Cycle and Agile workflow',
      '2 years of experience with HTML, UiBinder, and MVP concepts',
      '2 years of professional source control and workflow tools including Git, Subversion, Stack, Crucible, Jira, Confluence'
    ]),
    new ResumeSectionModel('Additional Skills', [
      'Angular, Spring, .NET, Micro Services',
      'C#, PHP, AJAX, jQuery',
      'Dependency Injection (Guice), SOAP',
      'Intellij, Datagrip, Microsoft SQL Server, Eclipse, VS Code, Visual Studio, Postman',
    ]),
    new ResumeSectionModel('Work Experience', []),
    new ResumeSectionModel('References', [
      'Steve Kautz, ISU Computer Science Professor and Mentor – (515) 294-4183',
      'Bronson Mayse, NISC Software Specialist and Coworker – (319) 855-0513'
    ])
  ];

  constructor() { }

  ngOnInit() {
  }
}
