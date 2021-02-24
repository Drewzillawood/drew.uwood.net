import { createAction, props } from '@ngrx/store';
import { Node } from '../node/store/node.index';

export const ADD_NODES = '[Node List] Add Nodes';

export const addNodes = createAction(
  ADD_NODES,
  props<{ [key: string]: Node }>()
);
