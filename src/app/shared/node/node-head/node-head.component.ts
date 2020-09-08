import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {NodeHeadDirective} from './node-head.directive';

@Component({
  selector: 'app-node-head',
  templateUrl: './node-head.component.html',
  styleUrls: ['./node-head.component.scss']
})
export class NodeHeadComponent {
  // @ViewChild(NodeHeadDirective, { static: false }) headerHost: NodeHeadDirective;

  constructor(private componentFactory: ComponentFactoryResolver) { }

  deploy(): void {
    // const componentFactory = this.componentFactory.resolveComponentFactory(NodeHeadComponent);
    // const host = this.headerHost.viewContainerRef;
    // host.clear();
    // host.createComponent(componentFactory);
  }
}
