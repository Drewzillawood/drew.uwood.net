import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutMeComponent} from './toolbar/settings/about-me/about-me.component';
import {ContactMeComponent} from './toolbar/settings/contact-me/contact-me.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact-me', component: ContactMeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
