import {ComponentRef, Injectable} from '@angular/core';
import {Node} from './node.model';

@Injectable({ providedIn: 'root' })
export class NodeSingletonService {

  node: Node = new Node();

  add(head: ComponentRef<any>, componentRef: ComponentRef<any>): void {
    if (this.node.next === undefined) {
      this.node.next = this.node;
      this.node.prev = this.node;
      this.node.head = head;
      this.node.body = componentRef;
    } else {
      const node = new Node(
        this.node,
        this.node.prev,
        head,
        componentRef
      );
      this.node.prev.next = node;
      this.node.prev = node;
    }
  }
}
