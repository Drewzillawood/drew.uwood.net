import { createAction, props } from '@ngrx/store';
import { Coordinates } from './node.index';

export const SET_NODE_COORDINATES = '[Node] Set Node Coordinates';

export const setNodeCoordinates = createAction(
  SET_NODE_COORDINATES,
  props<{
    id: number,
    coordinates: Coordinates
  }>()
);
