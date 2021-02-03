import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { NodeComponent } from './node/node.component';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';

import * as fromApp from './store/app.reducer';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromApp.appReducer)
  ],
  declarations: [
    AppComponent,
    NodeComponent
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
