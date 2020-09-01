import {Component, ViewChild} from '@angular/core';
import {NodeHeadDirective} from './node-head.directive';

@Component({
  selector: 'app-node-head',
  templateUrl: './node-head.component.html',
  styleUrls: ['./node-head.component.scss']
})
export class NodeHeadComponent {
  @ViewChild(NodeHeadDirective, { static: false }) headerContent: NodeHeadDirective;

  constructor() { }
}
