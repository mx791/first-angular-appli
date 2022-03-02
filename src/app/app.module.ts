import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroHeaderComponent } from './components/hero-header/hero-header.component';
import { ImagetextSplitComponent } from './components/imagetext-split/imagetext-split.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeroHeaderComponent,
    ImagetextSplitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
