import {ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef} from '@angular/core';
import {Node, Specifications} from './node.model';
import {Subject} from 'rxjs';

@Injectable()
export class NodeService {

  componentAssignedSubject = new Subject<ComponentRef<Specifications>>();

  node: Node;

  constructor(private cfr: ComponentFactoryResolver) {}

  createDynamicComponent<T>(component: Type<T>,
                            viewRef: ViewContainerRef): ComponentRef<any> {
    const factory = this.cfr.resolveComponentFactory<T>(component);
    return viewRef.createComponent(factory);
  }
}
