import {Component, ViewChild} from '@angular/core';
import {NodeDetailDirective} from './node-detail.directive';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.scss']
})
export class NodeDetailComponent {
  @ViewChild(NodeDetailDirective, { static: false }) detailContent: NodeDetailDirective;

  constructor() { }
}
