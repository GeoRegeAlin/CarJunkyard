import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrucksListComponent } from './truck-list/truck-list.component';
import { ModalComponent } from '../shared/truck-modal.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    TrucksListComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'trucks',component:TrucksListComponent}
    ]),
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  entryComponents:[
    ModalComponent
  ],
})
export class TruckModule { }
