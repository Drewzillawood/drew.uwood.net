import { AfterViewInit, Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { NodeBodyService } from './node-body.service';
import { Node } from '../store/node.index';

@Component({
  template: '<ng-container #container></ng-container>',
  selector: 'app-node-body',
  styleUrls: ['./node-body.component.scss']
})
export class NodeBodyComponent implements AfterViewInit {
  
  @ViewChild('container', { read: ViewContainerRef, static: false }) viewRef;
  @Input() node: Node;
  
  constructor(private nodeBodyService: NodeBodyService) { }
  
  ngAfterViewInit(): void {
    this.nodeBodyService.createDynamicComponent(this.node.type, this.viewRef);
  }
}
