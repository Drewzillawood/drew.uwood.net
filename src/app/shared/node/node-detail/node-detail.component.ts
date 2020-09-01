import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {NodeDetailDirective} from './node-detail.directive';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.scss']
})
export class NodeDetailComponent implements OnInit {
  @ViewChild(NodeDetailDirective, { static: false }) detailHost: NodeDetailDirective;

  constructor(private componentFactory: ComponentFactoryResolver) { }

  ngOnInit(): void {
    const componentFactory = this.componentFactory.resolveComponentFactory(NodeDetailComponent);
    const host = this.detailHost.viewContainerRef;
    host.clear();
    host.createComponent(componentFactory);
  }
}
