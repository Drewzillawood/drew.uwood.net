import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment.prod';
import { StoreModule } from '@ngrx/store';
import { NodeComponent } from './node/node.component';

import * as fromNode from './node/store/node.reducer';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ node: fromNode.nodeReducer }),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
  ],
  declarations: [
    AppComponent,
    NodeComponent,
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
