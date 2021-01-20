import {Component} from '@angular/core';

@Component({
  selector: 'app-work-experience-content',
  templateUrl: './work-experience-content.component.html',
  styleUrls: ['./work-experience-content.component.scss']
})
export class WorkExperienceContentComponent {
  contents = [
    {
      company: {
        name: 'J&P Cycles',
        imagePath: '/assets/img/j-and-p-cycles.png'
      },
      title: 'Software Engineer I',
      tenure: 'November 2019 - Present',
      responsibilities: [

      ]
    },
    {
      company: {
        name: 'NISC (National Information Solutions Cooperative)',
        imagePath: '/assets/img/NISC_Logo.png'
      },
      title: 'Software Associate',
      tenure: 'May 2018 - October 2019',
      responsibilities: [
        'Worked with a team of six utilizing the GWT framework, used Java, RESTful API, and SQL to deploy end-to-end features for our CSR-Portal website.',
        'Maintained and updated our backend, which was written in Java, to submit and retrieve JSON objects interpreted either through an Enterprise BEAN or a ResultSet.',
        'Seamlessly checked in code to the single branch of our Java backend after critical peer review and extensive JUnit testing.',
        'Managed sensitive timing of code commits to respect server side and client side compatibility between releases.',
        'Monitored backend, micro-services, and front end for necessary revision updates to Spring and/or ANT builds and configuration files.',
        'Dynamically handled project demands outside of standalone projects. Integrated micro-services locally into front end project to accurately and quickly identify issues.'
      ]
    },
    {
      company: {
        name: 'Iowa State University',
        imagePath: '/assets/img/Iowa_State_Cyclones_logo.svg.png'
      },
      title: 'Com S 227 Teaching Assistant',
      tenure: 'January 2017 - May 2018',
      responsibilities: [
        'Instructed class of 30-50 students in the basics of Object Oriented programming and design',
        'Grade, critique and provide expert level feedback on 3 programming assignments, 3 exams and 10 labs each semester',
        'Worked with students varying from complete beginner to rivaling my own understanding, and adapted teaching methods accordingly.'
      ]
    },
    {
      company: {
        name: 'Optum',
        imagePath: 'assets/img/Optum_logo.svg.png'
      },
      title: 'Technology Development Intern',
      tenure: 'May 2017 - August 2017',
      responsibilities: [
        'Joined an active development team and partook in their Agile workflow with standups each morning to communicate our tasks with the Scrum master.',
        'Introduced to Visual Studio, checking out tasks with Git and committing changes to be reviewed in TFS.'
      ]
    }
  ];

  constructor() { }
}
