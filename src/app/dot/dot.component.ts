import {AfterViewInit, Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as DotActions from '../dot/store/dot.action';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss']
})
export class DotComponent implements OnInit, AfterViewInit {

  @ViewChild('path', { static: false }) path;
  subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>,
              private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.subscription = this.store.select('dot').subscribe(stateData => {
      if (stateData !== undefined) {
        this.renderer.setAttribute(this.path.nativeElement, 'd', stateData.d);
      }
    });
    this.store.dispatch(new DotActions.MoveLine('M500 500 l100 100'));
  }
}
