import { createAction, props } from '@ngrx/store';

import * as fromNode from '../../node-list/node/store/node.index';

export const SET_INTRODUCTION_STATE = '[Introduction] Set Introduction State';

export const setIntroductionState = createAction(
  SET_INTRODUCTION_STATE,
  props<{ node: fromNode.NodeState }>()
);
