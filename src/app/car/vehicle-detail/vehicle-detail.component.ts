import {ActivatedRoute} from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Car } from '../Car';

@Component({
  selector: 'pm-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit{
  pageTitle:string='Vehicle detail';
  vehicle:Car;
  id:number=parseInt(this.route.snapshot.paramMap.get('id'))
  constructor(private route:ActivatedRoute,
              private specificVehicle:VehicleService) {
   }
  async ngOnInit():Promise<void>{
    this.vehicle=await this.specificVehicle.getSpecificVehicle(this.id);
}
  }
