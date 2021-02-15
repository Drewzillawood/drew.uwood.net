import { Component, OnInit } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction.component';
import { NodeModel, Position } from './node-list/node/model/node.model';
import { SuperHeaderComponent } from './super-header/super-header.component';
import { Store } from '@ngrx/store';

import * as fromApp from './store/app.reducer';
import * as NodeListActions from './node-list/store/node-list.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'drew.uwood.net';

    nodes: NodeModel[] = [
        new NodeModel(SuperHeaderComponent, Position.Default),
        new NodeModel(IntroductionComponent, Position.Bottom)
    ];

    constructor(private store: Store<fromApp.AppState>) {}

    ngOnInit(): void {
        this.store.dispatch(new NodeListActions.AddNodes(this.nodes));
    }
}
