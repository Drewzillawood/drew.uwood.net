import { AfterViewInit, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Node, Position } from '../node-list/node/store/node.index';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements AfterViewInit {
  
  constructor(private store: Store) {}
  
  ngAfterViewInit(): void {
    // this.store.dispatch(IntroductionActions.setIntroductionState());
  }
}
