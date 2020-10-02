import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements AfterViewInit {
  intro: string = `Experienced Software Engineer with a demonstrated history of working in the computer software industry.\
                   Skilled in Java, SQL, MVC/MVP Frameworks and Full-Stack Development. Eager to pursue new\
                   opportunities to further my understanding of application and web development.`;

  @ViewChild('connector', { static: false }) connector;

  constructor() { }

  ngAfterViewInit(): void {
    this.connector.draw();
  }
}
