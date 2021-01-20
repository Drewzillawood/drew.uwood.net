import {ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef} from '@angular/core';
import {Node} from './node.model';
import {Subject} from 'rxjs';
import {Position} from './git-graph-dot/git-graph-dot.component';

@Injectable()
export class NodeService {

  positionEmitter = new Subject<Position>();

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
