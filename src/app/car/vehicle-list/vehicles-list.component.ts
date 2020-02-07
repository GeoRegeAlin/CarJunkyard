import {Component, OnInit} from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Car } from '../Car';
import { Subscription } from 'rxjs';
import { CarComponent } from '../car/car.component';
@Component({
    selector:'pm-vehicles',
    templateUrl:'./vehicles-list.component.html',
    styleUrls:['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit{
    title:string='Vehicles List';
    private mySub:Subscription;
    vehicles:Car[];
    constructor(private vehicleService:VehicleService,
                private carComp:CarComponent)
    {

    }
    ngOnInit():void{
        this.mySub=this.vehicleService.getVehicles().subscribe(vehicles=>this.vehicles=vehicles)   
    }
    deleteCar(id:number):void{
        this.vehicleService.deleteCar(id).subscribe();
        this.vehicles=this.vehicles.filter(item=>item.id!=id)
    }
}  