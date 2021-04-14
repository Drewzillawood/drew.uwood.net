import { createAction, props } from '@ngrx/store';

import * as fromNode from '../node/store/node.index';

export const ADD_NODE = '[Node List] Add Node';

export const addNode = createAction(
  ADD_NODE,
  props<{ node: fromNode.State }>()
);
