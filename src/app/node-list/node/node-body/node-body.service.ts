import { ComponentFactoryResolver, Injectable, Type, ViewContainerRef } from '@angular/core';
import { SuperHeaderComponent } from '../../../super-header/super-header.component';
import { IntroductionComponent } from '../../../introduction/introduction.component';

@Injectable()
export class NodeBodyService {
  
  nodeTypes: { [key: string]: Type<any> } = {
    [SuperHeaderComponent.name]: SuperHeaderComponent,
    [IntroductionComponent.name]: IntroductionComponent
  };
  
  constructor(private cfr: ComponentFactoryResolver) {}
  
  createDynamicComponent<T>(component: string, viewRef: ViewContainerRef): void {
    const nodeType: Type<T> = this.nodeTypes[component];
    viewRef.createComponent(this.cfr.resolveComponentFactory<T>(nodeType));
  }
}
