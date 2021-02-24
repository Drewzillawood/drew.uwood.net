import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromNodeList from '../../store/node-list.index';
import * as NodeActions from './node.actions';
import * as NodeHeadActions from '../node-head/store/node-head.actions';

@Injectable()
export class NodeEffects {
  
  setNodeCoordinates$ = createEffect(
    () => this.actions$.pipe(
      ofType(NodeHeadActions.SET_NODE_HEAD_COORDINATES),
      withLatestFrom(this.store.select(fromNodeList.selectNodes)),
      tap(([action]) => {
        this.store.dispatch(NodeActions.setNodeCoordinates(action));
      })
    ),
    { dispatch: false }
  );
  
  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}
