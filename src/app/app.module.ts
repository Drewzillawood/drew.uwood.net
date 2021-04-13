import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { DotComponent } from './dot/dot.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    DotComponent
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
