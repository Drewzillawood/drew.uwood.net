import {Component} from '@angular/core';
import {IntroductionComponent} from './introduction/introduction.component';
import {NodeModel, Position} from './node-list/node/model/node.model';
import {SuperHeaderComponent} from './super-header/super-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drew.uwood.net';

  nodes: NodeModel[] = [
    new NodeModel(SuperHeaderComponent, Position.Default),
    new NodeModel(IntroductionComponent, Position.Bottom)
  ];
}
