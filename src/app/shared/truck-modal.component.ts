import {Component, OnInit, Input, Optional, Inject} from '@angular/core'
import{MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
import { TrucksService } from '../truck/truck.service';
import { ITruck } from '../truck/ITruck';
import { TrucksListComponent } from '../truck/truck-list/truck-list.component';
@Component({
    selector:'pm-modal',
    templateUrl:'./truck-modal.component.html'
})
export class ModalComponent {
    addDialog:MatDialogRef<TrucksListComponent>
    truck:ITruck;
    brand:string;
    constructor(
        public dialogRef: MatDialogRef<ModalComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: any
        ) {
          this.brand = data.truck;
        }
}