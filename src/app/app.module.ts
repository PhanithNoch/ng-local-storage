import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TechnologyComponent } from './technology/technology.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorComponent } from './error/error.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ValidationAppComponent } from './validation-app/validation-app.component';
import { LocalDataComponent } from './local-data/local-data.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiServiceService } from './shared/services/api-service.service';
import { EntertainmentDetailComponent } from './entertainment-detail/entertainment-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EntertainmentComponent,
    TechnologyComponent,
    HomePageComponent,
    ErrorComponent,
    ValidationAppComponent,
    LocalDataComponent,
    EntertainmentDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
