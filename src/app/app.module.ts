import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import * as fromApp from './store/app.reducer';
import {environment} from '../environments/environment.prod';
import {IntroductionComponent} from './introduction/introduction.component';
import {NodeModule} from './node/node.module';

@NgModule({
  imports: [
    BrowserModule,
    NodeModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({ logOnly: environment.production })
  ],
  declarations: [
    AppComponent,
    IntroductionComponent
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
