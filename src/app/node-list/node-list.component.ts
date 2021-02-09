import {Component, Input, OnInit} from '@angular/core';
import {NodeModel} from './node/model/node.model';

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.scss']
})
export class NodeListComponent implements OnInit {

  @Input() nodes: NodeModel[];

  constructor() { }

  ngOnInit(): void {
  }
}
