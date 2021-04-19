import { ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';
import { Coordinates } from './store/node.index';

@Injectable()
export class NodeService {
  
  constructor(private cfr: ComponentFactoryResolver) {}
  
  createDynamicComponent<T>(component: Type<T>, viewRef: ViewContainerRef): ComponentRef<any> {
    const factory = this.cfr.resolveComponentFactory<T>(component);
    return viewRef.createComponent(factory);
  }
  
  constructCoordinatesFromRect(rect): Coordinates {
    const xDiff = (rect.right - rect.left) / 2;
    const yDiff = (rect.bottom - rect.top) / 2;
    const x = rect.left + xDiff;
    const y = rect.top + yDiff;
    return new Coordinates(x, y);
  }
}
