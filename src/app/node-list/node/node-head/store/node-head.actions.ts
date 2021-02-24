import { createAction, props } from '@ngrx/store';
import { Coordinates } from '../../store/node.index';

export const SET_NODE_HEAD_COORDINATES = '[Node] Set Head Node Coordinates';

export const setNodeHeadCoordinates = createAction(
  SET_NODE_HEAD_COORDINATES,
  props<{
    key: string,
    coordinates: Coordinates
  }>()
);
