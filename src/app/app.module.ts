import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment.prod';
import { IntroductionComponent } from './introduction/introduction.component';
import { SuperHeaderComponent } from './super-header/super-header.component';
import { NodeListModule } from './node-list/node-list.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { NodeEffects } from './node-list/node/store/node.effects';

import * as fromNode from './node-list/node/store/node.reducer';
import * as fromNodeList from './node-list/store/node-list.reducer';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    NodeListModule,
    StoreModule.forRoot({
      appState: fromNodeList.nodeListReducer,
      nodeState: fromNode.nodeReducer
    }),
    EffectsModule.forRoot([NodeEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production })
  ],
  declarations: [
    AppComponent,
    IntroductionComponent,
    SuperHeaderComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
