import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCarouselModule, NgbCarousel, NgbCarouselConfig, NgbSlide } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselConfigService } from './carousel-config.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    // NgbSlide,
    // NgbCarousel
  ],
  imports: [
    BrowserModule,
    NgbCarouselModule,
    HttpClientModule
  ],
  providers: [
    CarouselConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
