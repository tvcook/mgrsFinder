import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { HeadingBannerComponent } from './heading-banner/heading-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    HeadingBannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
