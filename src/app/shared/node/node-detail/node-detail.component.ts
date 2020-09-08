import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {NodeDetailDirective} from './node-detail.directive';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.scss']
})
export class NodeDetailComponent {
  // @ViewChild(NodeDetailDirective, { static: false }) detailHost: NodeDetailDirective;

  constructor(private componentFactory: ComponentFactoryResolver) { }

  deploy(): void {
    // const componentFactory = this.componentFactory.resolveComponentFactory(NodeDetailComponent);
    // const host = this.detailHost.viewContainerRef;
    // host.clear();
    // host.createComponent(componentFactory);
  }
}
