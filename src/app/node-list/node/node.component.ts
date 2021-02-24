import { AfterViewInit, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Node } from './store/node.index';

@Component({
  selector: 'app-node',
  template: `
    <div class="row">
      <app-node-head [node]="node"></app-node-head>
      <app-node-body [node]="node"></app-node-body>
    </div>`,
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements AfterViewInit {
  @Input() node: Node;
  
  constructor(private store: Store) {}
  
  ngAfterViewInit(): void {
  
  }
}
