import {ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, TemplateRef, Type, ViewContainerRef} from '@angular/core';
import {Node} from './node.model';
import {NodeComponent} from './node.component';

export abstract class NodeFactory {
  public abstract create<T>(component: Type<T>): void;
}

@Injectable({ providedIn: 'any' })
export class NodeService {

  head: Node = new Node();

  constructor(private cfr: ComponentFactoryResolver) {}

  public createDynamicComponent<T>(component: Type<T>,
                                   viewRef: ViewContainerRef): void {
    const factory = this.cfr.resolveComponentFactory<T>(component);
    viewRef.createComponent(factory);
  }

  add(componentRef: ComponentRef<any>): void {
    if (this.head.next === undefined) {
      this.head.next = this.head;
      this.head.prev = this.head;
      this.head.body = componentRef;
    } else {
      const node = new Node(
        this.head,
        this.head.prev,
        null,
        componentRef
      );
      this.head.prev.next = node;
      this.head.prev = node;
    }
  }
}
