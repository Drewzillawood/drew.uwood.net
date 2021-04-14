import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import * as NodeActions from './store/node.actions';
import { Coordinates } from './store/node.index';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit, AfterViewInit {

  @ViewChild('circle') circle;
  
  constructor(private store: Store) { }

  ngOnInit(): void {
  
  }
  
  ngAfterViewInit(): void {
    const rect = this.circle.nativeElement.getBoundingClientRect();
    const xDiff = (rect.right - rect.left) / 2;
    const yDiff = (rect.bottom - rect.top) / 2;
    const x = rect.left + xDiff;
    const y = rect.top + yDiff;
    this.store.dispatch(NodeActions.initializedAction({
      coordinates: new Coordinates(x, y)
    }));
  }
}
