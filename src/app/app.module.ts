import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { NodeComponent } from './node/node.component';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import * as fromApp from './store/app.reducer';
import { NodeHeadComponent } from './node/node-head/node-head.component';
import { NodeBodyComponent } from './node/node-body/node-body.component';

@NgModule({
  imports: [
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    BrowserModule,
    StoreModule.forRoot(fromApp.appReducer)
  ],
  declarations: [
    AppComponent,
    NodeComponent,
    NodeHeadComponent,
    NodeBodyComponent
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
