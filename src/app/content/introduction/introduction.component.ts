import {Component, ViewChild} from '@angular/core';
import {Specifications} from '../../shared/node/node.model';
import {GitGraphDotComponent, Position} from '../../shared/node/git-graph-dot/git-graph-dot.component';
import {GitGraphDotService} from '../../shared/node/git-graph-dot/git-graph-dot.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements Specifications {

  @ViewChild(GitGraphDotComponent, { static: false }) point: GitGraphDotComponent;
  position: Position = Position.Bottom;

  intro: string = `Experienced Software Engineer with a demonstrated history of working in the computer software industry.\
                   Skilled in Java, SQL, MVC/MVP Frameworks and Full-Stack Development. Eager to pursue new\
                   opportunities to further my understanding of application and web development.`;

  constructor(private gitGraphDotService: GitGraphDotService) {
    this.gitGraphDotService.redrawSubject.next(this.position);
  }
}
