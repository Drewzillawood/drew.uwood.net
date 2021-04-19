import { createAction, props } from '@ngrx/store';
import { Coordinates } from './node.index';

export const ADD_HEAD = '[Node] Add Head';
export const ADD_BODY = '[Node] Add Body';

export const addHead = createAction(
  ADD_HEAD,
  props<{ coordinates: Coordinates }>()
);

export const addBody = createAction(
  ADD_BODY,
  props<{ coordinates: Coordinates }>()
);
