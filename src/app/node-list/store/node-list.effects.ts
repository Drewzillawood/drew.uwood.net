import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { tap } from 'rxjs/operators';

import * as NodeActions from '../node/store/node.actions';
import * as NodeListActions from './node-list.actions';

@Injectable()
export class NodeListEffects {
  
  addHead$ = createEffect(
    () => this.actions$.pipe(
      ofType(NodeActions.ADD_HEAD),
      tap((action) => {
        this.store.dispatch(NodeListActions.addNode(action));
      })
    ),
    { dispatch: false }
  );
  
  addBody$ = createEffect(
    () => this.actions$.pipe(
      ofType(NodeActions.ADD_BODY),
      tap((action) => {
        // this.store.dispatch(NodeListActions.(action));
      })
    ),
    { dispatch: false }
  );
  
  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}
