import {ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef} from '@angular/core';

@Injectable()
export class NodeBodyService {

  constructor(private cfr: ComponentFactoryResolver) {}

  createDynamicComponent<T>(component: Type<T>,
                            viewRef: ViewContainerRef): ComponentRef<any> {
    const factory = this.cfr.resolveComponentFactory<T>(component);
    return viewRef.createComponent(factory);
  }
}
