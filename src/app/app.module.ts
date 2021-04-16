import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment.prod';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NodeListModule } from './node-list/node-list.module';
import { NodeListEffects } from './node-list/store/node-list.effects';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  imports: [
    BrowserModule,
    NodeListModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([NodeListEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
  ],
  declarations: [
    AppComponent,
    DummyComponent
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
