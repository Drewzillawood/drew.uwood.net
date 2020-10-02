import {AfterViewInit, Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {WorkExperienceContentModel} from './model/work-experience-content.model';
import {DotComponent} from '../../shared/dot/dot.component';
import {ConnectorComponent} from '../../shared/connector/connector.component';

@Component({
  selector: 'app-work-experience-content',
  templateUrl: './work-experience-content.component.html',
  styleUrls: ['./work-experience-content.component.scss']
})
export class WorkExperienceContentComponent implements AfterViewInit {
  contents: WorkExperienceContentModel[] = [
    {
      company: {
        name: 'J&P Cycles',
        imagePath: ''
      },
      title: 'Software Engineer I',
      tenure: 'November 2019 - Present',
      responsibilities: []
    },
    {
      company: {
        name: 'NISC (National Information Solutions Cooperative)',
        imagePath: '/assets/img/nisc_new_logo.jpg'
      },
      title: 'Software Associate',
      tenure: 'May 2018 - October 2019',
      responsibilities: []
    },
    {
      company: {
        name: 'Iowa State University',
        imagePath: '/assets/img/Iowa_State_Cyclones_logo.svg.png'
      },
      title: 'Com S 227 Teaching Assistant',
      tenure: 'January 2017 - May 2018',
      responsibilities: []
    },
    {
      company: {
        name: 'Optum',
        imagePath: 'assets/img/Optum.jpg'
      },
      title: 'Technology Development Intern',
      tenure: 'May 2017 - August 2017',
      responsibilities: []
    }
  ];

  @ViewChild('connectorStart', { static: false }) connectorStart: ConnectorComponent;
  @ViewChild('connectorMid', { static: false }) connectorMid: ConnectorComponent;
  @ViewChild('connectorEnd', { static: false }) connectorEnd: ConnectorComponent;
  @ViewChild('start', { static: false }) start: DotComponent;
  @ViewChild('end', { static: false }) end: DotComponent;
  @ViewChildren('mid') dots: QueryList<DotComponent>;

  constructor() { }

  ngAfterViewInit(): void {
    this.connectorStart.p2 = this.dots.last.elRef;
    this.connectorStart.draw();
    this.connectorMid.p2 = this.dots.first.elRef;
    this.connectorMid.draw();
    this.connectorEnd.p1 = this.dots.first.elRef;
    this.connectorEnd.p2 = this.dots.last.elRef;
    this.connectorEnd.draw();
  }
}
