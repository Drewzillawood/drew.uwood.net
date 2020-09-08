import {AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {NodeHeadComponent} from './node-head/node-head.component';
import {NodeDetailComponent} from './node-detail/node-detail.component';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements AfterViewInit {
  @ViewChild('nodeHead', { read: ViewContainerRef }) headRef;
  @ViewChild('nodeDetail', { read: ViewContainerRef }) detailRef;

  constructor(private componentFactory: ComponentFactoryResolver) { }

  ngAfterViewInit(): void {
    const componentHeadFactory = this.componentFactory.resolveComponentFactory(NodeHeadComponent);
    const headHost = this.headRef;
    headHost.clear();
    headHost.createComponent(componentHeadFactory);

    const componentDetailFactory = this.componentFactory.resolveComponentFactory(NodeDetailComponent);
    const detailHost = this.detailRef;
    detailHost.clear();
    detailHost.createComponent(componentDetailFactory);
  }
}
