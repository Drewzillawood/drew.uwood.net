import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {HeaderComponent} from './header/header.component';
import {SuperHeaderComponent} from './super-header/super-header.component';
import {ContentComponent} from './content/content.component';
import {IntroductionComponent} from './content/introduction/introduction.component';
import {SectionContentComponent} from './content/section-content/section-content.component';
import {BrowserModule} from '@angular/platform-browser';
import { WorkExperienceContentComponent } from './content/work-experience-content/work-experience-content.component';
import { WorkExperienceDetailComponent } from './content/work-experience-content/detail/work-experience-detail.component';
import {WorkExperienceHeaderComponent} from './content/work-experience-content/header/work-experience-header.component';

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
    SectionContentComponent,
    WorkExperienceHeaderComponent,
    WorkExperienceContentComponent,
    WorkExperienceDetailComponent
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
