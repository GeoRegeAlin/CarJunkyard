import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesListComponent } from './vehicle-list/vehicles-list.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { SingleCarComponent } from './single-car/single-car.component';
import { CarComponent } from './car/car.component';



@NgModule({
  declarations: [
    VehiclesListComponent,
    VehicleDetailComponent,
    AddCarComponent,
    SingleCarComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'vehicles',component:CarComponent},
      {path:'vehicles/:id',component:VehicleDetailComponent},
      {path:'addCar',component:AddCarComponent}
    ]),
    ReactiveFormsModule
  ]
})
export class CarModule { }
