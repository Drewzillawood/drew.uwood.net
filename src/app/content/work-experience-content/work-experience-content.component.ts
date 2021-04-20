import {Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {WorkExperienceContentModel} from './model/work-experience-content.model';
import {DotComponent} from '../../shared/dot/dot.component';
import {ConnectorComponent} from '../../shared/connector/connector.component';

@Component({
  selector: 'app-work-experience-content',
  templateUrl: './work-experience-content.component.html',
  styleUrls: ['./work-experience-content.component.scss']
})
export class WorkExperienceContentComponent {
  contents: WorkExperienceContentModel[] = [
    {
      company: {
        name: 'J&P Cycles',
        imagePath: '/assets/j_and_p_cycles.svg.png'
      },
      title: 'Software Engineer I',
      tenure: 'November 2019 - Present',
      responsibilities: [
        'Support and develop software engineers (junior-to-senior level) by providing advice, coaching.',
        'Be an active participant in strategic planning discussions with technical and non-technical stakeholders',
        'Provide technical direction for solutions of complex problems while staying consistent with overall solution architecture.',
        'Understand who our customers are and the ability to propose and architect solutions to meet their needs.',
        'Have the ability to take high-level system initiatives and decompose them into workable user stories for the team to work on.'
      ]
    },
    {
      company: {
        name: 'NISC (National Information Solutions Cooperative)',
        imagePath: '/assets/NISC_Logo.svg.png'
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
        imagePath: '/assets/Iowa_State_Cyclones_logo.svg.png'
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
        imagePath: 'assets/Optum_logo.svg.png'
      },
      title: 'Technology Development Intern',
      tenure: 'May 2017 - August 2017',
      responsibilities: [
        'Joined an active development team and partook in their Agile workflow with standups each morning to communicate our tasks with the Scrum master.',
        'Introduced to Visual Studio, checking out tasks with Git and committing changes to be reviewed in TFS.'
      ]
    }
  ];

  @ViewChild('connectorStart', { static: false }) connectorStart: ConnectorComponent;
  @ViewChild('connectorMid', { static: false }) connectorMid: ConnectorComponent;
  @ViewChild('connectorEnd', { static: false }) connectorEnd: ConnectorComponent;
  @ViewChild('start', { static: false }) start: DotComponent;
  @ViewChild('end', { static: false }) end: DotComponent;
  @ViewChildren('mid') dots: QueryList<DotComponent>;

  constructor() { }

  drawBranch() {
    this.connectorStart.p2 = this.dots.last.elRef;
    this.connectorStart.draw();
    this.connectorMid.p2 = this.dots.first.elRef;
    this.connectorMid.draw();
    this.connectorEnd.p1 = this.dots.first.elRef;
    this.connectorEnd.p2 = this.dots.last.elRef;
    this.connectorEnd.draw();
  }
}
