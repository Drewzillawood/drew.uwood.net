import {Component} from '@angular/core';
import { IntroductionComponent } from './introduction/introduction.component';
import {NodeModel, Position} from './node/model/node.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drew.uwood.net';

  nodes: NodeModel[] = [
    new NodeModel(IntroductionComponent, Position.Bottom)
  ];
}
