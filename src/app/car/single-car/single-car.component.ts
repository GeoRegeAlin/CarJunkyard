import { Component, Input } from '@angular/core';
import { Car } from '../Car';

@Component({
  selector: 'pm-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.css']
})
export class SingleCarComponent{
  @Input() car:Car;
  vehicles:Car[]=[];
}
