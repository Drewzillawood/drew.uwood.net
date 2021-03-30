import { createAction, props } from '@ngrx/store';

export const SET_NODE_BODY_CONTENTS = '[Node Body] Set Node Body Contents';

export const setNodeBodyContents = createAction(
  SET_NODE_BODY_CONTENTS,
  props<{ key: string, contents: object }>()
);
