import {Component, Input, OnInit, Type} from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() type: Type<any>;

  constructor() {
  }

  ngOnInit(): void {
  }
}
