import { Component, Input } from '@angular/core';
import { Node } from './store/node.reducer';

@Component({
  selector: 'app-node',
  template: `
    <div class="row">
      <app-node-head [position]="node.position"></app-node-head>
      <app-node-body [type]="node.type"></app-node-body>
    </div>`,
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {
  @Input() node: Node;
}
