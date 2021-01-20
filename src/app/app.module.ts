import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {HeaderComponent} from './header/header.component';
import {SuperHeaderComponent} from './super-header/super-header.component';
import {ContentComponent} from './content/content.component';
import {BrowserModule} from '@angular/platform-browser';
import {WorkExperienceContentComponent} from './content/work-experience-content/work-experience-content.component';
import {IntroductionComponent} from './content/introduction/introduction.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SuperHeaderComponent,
    ContentComponent,
    IntroductionComponent,
    WorkExperienceContentComponent
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    SuperHeaderComponent,
    HeaderComponent
  ]
})

export class AppModule { }
