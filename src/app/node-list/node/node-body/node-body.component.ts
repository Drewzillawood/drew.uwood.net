import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NodeBodyService } from './node-body.service';
import { DummyComponent } from '../../../dummy/dummy.component';

@Component({
  selector: 'app-node-body',
  template: `
    <svg>
      <circle
        #circle
        cx=50%
        cy=50%
        fill="#008eb5"
        r="12.5"
      />
    </svg>
    <ng-container #container></ng-container>
  `,
  styleUrls: ['./node-body.component.scss']
})
export class NodeBodyComponent implements AfterViewInit {

  @ViewChild('container', { read: ViewContainerRef, static: false }) viewRef;
  
  constructor(private nodeBodyService: NodeBodyService) { }

  ngAfterViewInit(): void {
    // this.nodeBodyService.createDynamicComponent(DummyComponent, this.viewRef);
  }
}
