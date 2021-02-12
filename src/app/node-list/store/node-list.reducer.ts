import { NodeModel } from '../node/model/node.model';

import * as NodeListActions from './node-list.actions';

export interface State {
    nodes: NodeModel[];
}

export const initialState: State = {
    nodes: []
};

export function nodeListReducer(
    state: State = initialState,
    action: NodeListActions.NodeListActions) {
    switch (action.type) {
        case NodeListActions.ADD_NODE:
            return {
                ...state,
                nodes: [
                    ...state.nodes,
                    action.payload
                ]
            };
        default:
            return state;
    }
}

