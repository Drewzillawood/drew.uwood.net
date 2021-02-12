import { NodeHeadModel } from '../node-head/model/node-head.model';
import { NodeBodyModel } from '../node-body/model/node-body.model';

export interface NodeState {
    head: NodeHeadModel;
    body: NodeBodyModel;
}

export const initialState: NodeState = {
    head: null,
    body: null
};

export function nodeReducer(
    state: NodeState = initialState,
    action) {
    return state;
}
