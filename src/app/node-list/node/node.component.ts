import { Component } from '@angular/core';

@Component({
  selector: 'app-node',
  template: `
    <app-node-head></app-node-head>
    <app-node-body></app-node-body>
  `,
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {
  
  constructor() { }
}
