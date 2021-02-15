import { Component, Input } from '@angular/core';
import { NodeModel } from './node/model/node.model';

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.scss']
})
export class NodeListComponent {
  @Input() nodes: NodeModel[];
}
