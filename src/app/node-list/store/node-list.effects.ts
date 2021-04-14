import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { tap } from 'rxjs/operators';

import * as NodeActions from '../node/store/node.actions';
import * as NodeListActions from './node-list.actions';

@Injectable()
export class NodeListEffects {
  
  addNode$ = createEffect(
    () => this.actions$.pipe(
      ofType(NodeActions.INITIALIZE),
      tap((action) => {
        this.store.dispatch(NodeListActions.addNode(action));
      })
    ),
    { dispatch: false }
  );
  
  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}
