import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as NodeHeadActions from '../node-head/store/node-head.actions';
import * as NodeListActions from '../../store/node-list.actions';

@Injectable()
export class NodeEffects {
  
  setNodeCoordinates$ = createEffect(
    () => this.actions$.pipe(
      ofType(NodeHeadActions.SET_NODE_HEAD_COORDINATES),
      tap((action) => {
        this.store.dispatch(NodeListActions.assignCoordinatesToList(action));
      })
    ),
    { dispatch: false }
  );
  
  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}
