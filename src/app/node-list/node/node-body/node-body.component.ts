import { AfterViewInit, Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { NodeBodyService } from './node-body.service';

@Component({
  template: '<ng-container #container></ng-container>',
  selector: 'app-node-body',
  styleUrls: ['./node-body.component.scss']
})
export class NodeBodyComponent implements AfterViewInit {
  
  @ViewChild('container', { read: ViewContainerRef, static: false }) viewRef;
  @Input() type: string;
  
  constructor(private nodeBodyService: NodeBodyService) { }
  
  ngAfterViewInit(): void {
    this.nodeBodyService.createDynamicComponent(this.type, this.viewRef);
  }
}
