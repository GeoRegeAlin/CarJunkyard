import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CarModule } from './car/car.module';
import { TruckModule } from './truck/truck.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarComponent } from './car/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    CarModule,
    TruckModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'vehicles',component:CarComponent}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
