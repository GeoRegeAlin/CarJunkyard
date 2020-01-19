import {Component} from '@angular/core'
import { ITruck } from '../ITruck'
import { TrucksService } from '../truck.service';
import { ModalComponent } from '../../shared/truck-modal.component';
import { MatDialogRef, MatDialog } from '@angular/material';
@Component({
    templateUrl:'./truck-list.component.html',
    styleUrls: ['./truck-list.component.css']
})
export class TrucksListComponent{
    trucks:ITruck[];
    truck:ITruck;
    addDialog:MatDialogRef<ModalComponent>

constructor(private trucksService:TrucksService,
            private dialog:MatDialog){
}
showTrucks():void{
    this.trucksService.getTrucks().subscribe({
        next:trucks=>this.trucks=trucks
    })
}
    async open(id:number):Promise<void>{
    this.truck=await this.trucksService.getSpecificTruck(id);
    this.addDialog=this.dialog.open(ModalComponent,{
        data:{
            truck:this.truck.brand
        }
    })   
}
}