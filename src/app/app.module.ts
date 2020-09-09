import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {HeaderComponent} from './header/header.component';
import {SuperHeaderComponent} from './super-header/super-header.component';
import {ContentComponent} from './content/content.component';
import {IntroductionComponent} from './content/introduction/introduction.component';
import {SectionContentComponent} from './content/section-content/section-content.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SuperHeaderComponent,
    ContentComponent,
    IntroductionComponent,
    SectionContentComponent
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
