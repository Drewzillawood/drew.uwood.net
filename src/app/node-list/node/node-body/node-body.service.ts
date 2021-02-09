import {ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromNodeBody from './store/node-body.reducer';
import * as NodeBodyActions from './store/node-body.actions';
import {NodeBodyModel} from './model/node-body.model';

@Injectable()
export class NodeBodyService {

  constructor(private store: Store<fromNodeBody.State>,
              private cfr: ComponentFactoryResolver) {}

  createDynamicComponent<T>(component: Type<T>,
                            viewRef: ViewContainerRef): ComponentRef<any> {
    const factory = this.cfr.resolveComponentFactory<T>(component);
    const componentRef = viewRef.createComponent(factory);
    this.store.dispatch(new NodeBodyActions.InitializeComponent(
      new NodeBodyModel(true)
    ));
    return componentRef;
  }
}
