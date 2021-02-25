import { createAction, props } from '@ngrx/store';

import * as fromNodeHead from '../node-head/store/node-head.index';

export const SET_NODE_COORDINATES = '[Node] Set Node Coordinates';

export const setNodeCoordinates = createAction(
  SET_NODE_COORDINATES,
  props<{
    key: string,
    nodeHead: fromNodeHead.NodeHeadState
  }>()
);
