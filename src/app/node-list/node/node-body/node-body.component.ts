import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';

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
  
  constructor() { }

  ngAfterViewInit(): void {
    // this.nodeBodyService.createDynamicComponent(DummyComponent, this.viewRef);
  }
}
