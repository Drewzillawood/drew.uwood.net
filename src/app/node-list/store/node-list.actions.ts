import { createAction, props } from '@ngrx/store';
import { Coordinates, NodeState } from '../node/store/node.index';

export const ADD_NODES = '[Node List] Add Nodes';
export const ASSIGN_COORDINATES_TO_LIST = '[Node List] Assign Coordinates';

export const addNodes = createAction(
  ADD_NODES,
  props<{ [key: string]: NodeState }>()
);

export const assignCoordinatesToList = createAction(
  ASSIGN_COORDINATES_TO_LIST,
  props<{ key: string, coordinates: Coordinates }>()
);
