import { ComponentFactoryResolver, Injectable, Type, ViewContainerRef } from '@angular/core';
import { SuperHeaderComponent } from '../../../super-header/super-header.component';
import { IntroductionComponent } from '../../../introduction/introduction.component';

@Injectable()
export class NodeBodyService {
  
  nodeTypes: Map<string, Type<any>> = new Map([
    [SuperHeaderComponent.name, SuperHeaderComponent],
    [IntroductionComponent.name, IntroductionComponent]
  ]);
  
  constructor(private cfr: ComponentFactoryResolver) {}
  
  createDynamicComponent(component: string, viewRef: ViewContainerRef): void {
    const nodeType: Type<any> = this.nodeTypes.get(component);
    viewRef.createComponent(this.cfr.resolveComponentFactory(nodeType));
  }
}
