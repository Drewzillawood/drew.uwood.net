import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SuperHeaderComponent } from './super-header/super-header.component';
import { ContentComponent } from './content/content.component';
import {MatCardModule, MatGridListModule} from '@angular/material';
import { IAmComponent } from './content/i-am/i-am.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuperHeaderComponent,
    ContentComponent,
    IAmComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
