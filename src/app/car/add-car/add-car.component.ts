import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Car } from '../Car';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'pm-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  car:Car={
    brand:'',
    id:0,
    model:'',
    km:0,
    pret:3,
    img:''
  };
  constructor(private specificVehicle:VehicleService) {
   }
  myform=new FormGroup({
    brand:new FormControl(''),
    model:new FormControl(''),
    km:new FormControl(''),
    pret:new FormControl('')
  })
  addCar(myform):void{
    this.car.brand=myform.brand;
    this.car.model=myform.model;
    this.car.km=parseInt(myform.km);
    this.car.pret=parseInt(myform.pret);
    this.specificVehicle.addVehicle(this.car).subscribe();
    this.myform.reset();
  }
}
