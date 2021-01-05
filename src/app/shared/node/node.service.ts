import {ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, TemplateRef, Type, ViewContainerRef} from '@angular/core';
import {Node} from './node.model';
import {NodeComponent} from './node.component';

@Injectable({ providedIn: 'any' })
export class NodeService {

  node: Node = new Node();

  constructor(private cfr: ComponentFactoryResolver) {}

  public createDynamicComponent<T>(component: Type<T>,
                                   viewRef: ViewContainerRef): ComponentRef<any> {
    const factory = this.cfr.resolveComponentFactory<T>(component);
    return viewRef.createComponent(factory);
  }

  add(head: ComponentRef<any>, componentRef: ComponentRef<any>): void {
    if (this.node.next === undefined) {
      this.node.next = this.node;
      this.node.prev = this.node;
      this.node.head = head;
      this.node.body = componentRef;
    } else {
      const node = new Node(
        this.node,
        this.node.prev,
        head,
        componentRef
      );
      this.node.prev.next = node;
      this.node.prev = node;
    }
  }
}
