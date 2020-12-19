import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TechnologyComponent } from './technology/technology.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorComponent } from './error/error.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EntertainmentComponent,
    TechnologyComponent,
    HomePageComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
