import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {environment} from '../environments/environment.prod';
import {IntroductionComponent} from './introduction/introduction.component';
import {SuperHeaderComponent} from './super-header/super-header.component';
import {NodeListModule} from './node-list/node-list.module';
import {SharedModule} from './shared/shared.module';
import {appReducer} from './store/app.reducer';

@NgModule({
  imports: [
    BrowserModule,
    NodeListModule,
    SharedModule,
    StoreModule.forRoot({ }),
    StoreDevtoolsModule.instrument({logOnly: environment.production})
  ],
  declarations: [
    AppComponent,
    IntroductionComponent,
    SuperHeaderComponent
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
