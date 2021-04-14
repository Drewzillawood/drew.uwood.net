import { createAction, props } from '@ngrx/store';
import { Coordinates } from './node.index';

export const INITIALIZE = '[Node] Initialize';

export const initialize = createAction(
  INITIALIZE,
  props<{ coordinates: Coordinates }>()
);
