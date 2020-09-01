import {Injectable} from '@angular/core';
import {NodeModel} from './model/node.model';

@Injectable({ providedIn: 'root' })
export class NodeService {
  nodes: NodeModel[] = [];

  initNode(node: NodeModel) {

  }
}
