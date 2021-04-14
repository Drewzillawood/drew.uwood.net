import { createAction, props } from '@ngrx/store';
import { Coordinates } from './node.index';

export const INITIALIZED_ACTION = '[Node] Initialized';

export const initializedAction = createAction(
  INITIALIZED_ACTION,
  props<{ coordinates: Coordinates }>()
);
