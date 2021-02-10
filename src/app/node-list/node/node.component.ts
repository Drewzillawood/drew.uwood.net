import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {NodeModel} from './model/node.model';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit, AfterViewInit {

  @Input() node: NodeModel;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }
}
