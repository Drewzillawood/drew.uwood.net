import { Node, Position } from '../node/store/node.reducer';
import { ActionReducerMap } from '@ngrx/store';

import * as fromNode from '../node/store/node.reducer';
import * as NodeListActions from './node-list.actions';
import { SuperHeaderComponent } from '../../super-header/super-header.component';
import { IntroductionComponent } from '../../introduction/introduction.component';

export interface State {
  nodes: Node[];
}

const initialState: State = {
  nodes: [
    {
      type: SuperHeaderComponent.name,
      position: Position.Default
    },
    {
      type: IntroductionComponent.name,
      position: Position.Bottom
    }
  ]
};

export function nodeListReducer(
  state: State = initialState,
  action: NodeListActions.NodeListActions
) {
  switch (action.type) {
    case NodeListActions.INIT_NODES:
      return {
        ...state,
        nodes: [
          ...state.nodes,
          ...action.payload
        ]
      };
    default:
      return state;
  }
}
